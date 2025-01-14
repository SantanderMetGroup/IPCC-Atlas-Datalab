# Dockerfile

This Dockerfile provides a DataLab set-up for users interested in running their own [Jupyter Lab environment](https://jupyter.readthedocs.io/en/latest).

## Install Docker

The best option is to install Docker from its own [repositories](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-repository).

After installing, to be able to use Docker without the `sudo`, it is necessary to add your user to the docker group (this group is created during the installation).

```bash
$ sudo usermod -aG docker your-user
```

Finally, "logout" and "login" again.

## Build and run the environment

Build:

```bash
docker build -t ipcc-atlas-datalab:latest -f Dockerfile .
```

Run:

```bash
docker run -p 8888:8888 santandermetgroup/climate4r 
```

The last command will return an URL:

http://(firstchoice or secondchoice):8888/

Write http://firstchoice:8888/ or http://secondchoice:8888/ in your browser and start working!

