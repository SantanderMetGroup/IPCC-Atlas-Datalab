FROM jupyter/base-notebook:latest

ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Etc/UTC

USER root
RUN apt-get update && apt-get install -y xorg git wget build-essential tzdata && apt-get clean && \
    chown -R jovyan:users /home/jovyan

USER jovyan
RUN conda install mamba -y -n base -c conda-forge && \
    mamba install -y -n base jupyter 'libsqlite<3.46' nbgitpuller jupyterhub-idle-culler jupyterlab-git

RUN conda create -n xarray && \
    source /opt/conda/bin/activate xarray && \
    mamba install -y 'libnetcdf<4.9' jupyter xarray pandas matplotlib cartopy netcdf4 cftime dask iris zarr s3fs h5py gcsfs siphon beautifulsoup4 scikit-learn geopandas h5netcdf \
    nco cdo cf-python cf-plot && \
    python -m ipykernel install --name xarray --display-name "xarray" --prefix /opt/conda

RUN conda create -n climate4r && \
    source /opt/conda/bin/activate climate4r && \
    mamba install -y -n climate4r -c conda-forge -c r -c defaults -c santandermetgroup \
        r-climate4r jupyter \
        r-sf r-rgeos r-rgdal r-systemfonts r-terra r-lwgeom r-svglite r-satellite r-zip r-mapview r-dplyr r-shiny r-leafpop \
        r-curl r-httr \
        nco cdo \
        r-irkernel && \
    R --vanilla -e 'IRkernel::installspec(name = "climate4r", displayname = "climate4R", user = FALSE, prefix="/opt/conda")'
