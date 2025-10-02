[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/SantanderMetGroup/IPCC-Atlas-Datalab)

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/SantanderMetGroup/IPCC-Atlas-Datalab/HEAD?labpath=README.md) [![IFCA](https://img.shields.io/badge/launch-IFCA-orange)](https://hub.climate4r.ifca.es/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2FSantanderMetGroup%2FIPCC-Atlas-Datalab&urlpath=lab%2Ftree%2FIPCC-Atlas-Datalab%2Fnotebooks%2FR%2Fgetting_started.ipynb&branch=main) 

[![Jupyter Book (R)](https://img.shields.io/badge/Jupyter_Book-R-green)](https://santandermetgroup.github.io/IPCC-Atlas-Datalab/book/R/html/getting_started.html) [![Jupyter Book (Python)](https://img.shields.io/badge/Jupyter_Book-Python-green)](https://santandermetgroup.github.io/IPCC-Atlas-Datalab/book/python/html/getting_started.html)

# The IPCC AR6 Interactive Atlas Datalab

The IPCC AR6 Interactive Atlas Datalab provides reproducibility of results of the [IPCC WGI Interactive Atlas](https://interactive-atlas.ipcc.ch).

The original netCDF files of the Interactive Atlas dataset may be downloaded from the following repositories:

- Copernicus CDS - [https://cds.climate.copernicus.eu/datasets/multi-origin-c3s-atlas](https://cds.climate.copernicus.eu/datasets/multi-origin-c3s-atlas)
- Digital CSIC - [https://digital.csic.es/handle/10261/280324](https://digital.csic.es/handle/10261/280324)


## Contents

| Directory         | Description                                                                                          |
|-------------------|------------------------------------------------------------------------------------------------------|
| [book](book)                              | A Jupyter Book available in both [R](https://santandermetgroup.github.io/IPCC-Atlas-Datalab/book/R/html/getting_started.html) and [Python](https://santandermetgroup.github.io/IPCC-Atlas-Datalab/book/python/html/getting_started.html). | 
| [docker](docker)                          | A Dockerfile for creating a customizable virtual environment for the IPCC Atlas DataLab.             |
| [data\_inventory.csv](data_inventory.csv) | A CSV file listing the datasets available in the IPCC Atlas DataLab.                              |
| [notebooks](notebooks)                    | Jupyter notebooks enabling reproducibility and reusability of the IPCC Atlas DataLab products.       |

## Notebooks

### Getting started

- [Python](notebooks/python/getting_started.ipynb)
- [R](notebooks/R/getting_started.ipynb)

### Global warming levels

- [Python](notebooks/python/maps_of_change/Maps_of_change_under_global-warming-levels.ipynb)
- [R](notebooks/R/maps_of_change/Maps_of_change_under_global-warming-levels.ipynb)

### Regional aggregation

- [Python](notebooks/python/regional_aggregation/Regional_aggregation_and_visualization.ipynb)
- [R](notebooks/R/regional_aggregation/Regional_aggregation_and_visualization.ipynb)

### Global Surface Air Temperature changes in future scenarios

- [Python](notebooks/python/time-series_of_change/GSAT-change_time-series.ipynb)

