import yaml
import os
import subprocess
import sys
from packaging import version as packaging_version

ipfs_cluster_host=sys.argv[1]
ipfs_cluster_basic_auth=sys.argv[2]

app_versions=[]

for root, dirs, files in os.walk("./environments"):
    for file in files:
        if file == "deploys.yml":
            with open(os.path.join(root, file)) as f:
                y=yaml.safe_load(f)
                for key, app in y.items():
                    for version, version_params in y[key]['versions'].items():
                        app_versions.append({
                            "environment": root.split("/")[2],
                            "app": key,
                            "version": version,
                            "params": version_params
                        })


pins_output=subprocess.check_output(["ipfs-cluster-ctl --basic-auth '" + ipfs_cluster_basic_auth + "' --host " + ipfs_cluster_host + " pin ls"], shell=True)
pins=[]
for pin in pins_output.splitlines():
    pins.append(pin.decode("utf-8")[0:46])

apps_to_pin={}
for app in app_versions:
    if not app['environment'] in apps_to_pin:
        apps_to_pin[app['environment']]={}
    if app['app'] in apps_to_pin[app['environment']]:
        if packaging_version.parse(apps_to_pin[app['environment']][app['app']]['version']) < packaging_version.parse(app['version']):
            apps_to_pin[app['environment']][app['app']] = app
    else:
        apps_to_pin[app['environment']][app['app']] = app

for environment in apps_to_pin:
    print("[*] %d apps versions in %s" % (len(apps_to_pin[environment]), environment))
    for appname in apps_to_pin[environment]:
        app=apps_to_pin[environment][appname]
        if app['params']['ipfsHash'] in pins:
            print("[*] Skipping pinning for %s with version %s. Already present..." % (app['app'], app['version']))
            continue
        print("[*] Pinning %s %s on %s" % (app['app'], app['version'], app['environment']))
        subprocess.run("tar xvfz ./environments/" + app['environment'] + "/" + app['app'] + "/" + app['app'] + "@" + app['version'] + ".tar.gz", shell=True, stdout=subprocess.DEVNULL)
        subprocess.run(["ipfs-cluster-ctl --basic-auth '" + ipfs_cluster_basic_auth + "' --host " + ipfs_cluster_host + " add -r " + app['params']['ipfsHash'] + "/"], stdout=subprocess.DEVNULL, shell=True)