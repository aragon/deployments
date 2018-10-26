FROM node:8-onbuild

ENV PORT 8080
EXPOSE 8080
ENV DOCKER_BUILD "true"
RUN git remote add origin-https https://github.com/aragon/deployments.git
