import time
import psutil

import numpy as np
import pandas as pd

import cftime
import xarray
import dask


def weighted(nw, historical_dss, ssp126_dss, ssp245_dss, ssp370_dss, ssp585_dss):
    # reference periods
    historical_spatial_mean_1995_2014 = []
    historical_spatial_mean_1850_1900 = []
    for ds in historical_dss:
        print(f"Model_run: {ds.attrs['model_run']}")
        weights = np.cos(np.deg2rad(ds["lat"]))
        if isinstance(ds["time"][0].item(), cftime.Datetime360Day):
            mean_1995_2014 = ds["tas"].chunk({"time": 100}).sel(time=slice("19950101", "20141230")).weighted(weights).mean(["time", "lat", "lon"]).compute(
                num_workers=nw, scheduler="processes")
            mean_1850_1900 = ds["tas"].chunk({"time": 100}).sel(time=slice("18500101", "19001230")).weighted(weights).mean(["time", "lat", "lon"]).compute(
                num_workers=nw, scheduler="processes")
        else:
            mean_1995_2014 = ds["tas"].chunk({"time": 100}).sel(time=slice("19950101", "20141231")).weighted(weights).mean(["time", "lat", "lon"]).compute(
                num_workers=nw, scheduler="processes")
            mean_1850_1900 = ds["tas"].chunk({"time": 100}).sel(time=slice("18500101", "19001231")).weighted(weights).mean(["time", "lat", "lon"]).compute(
                num_workers=nw, scheduler="processes")
        historical_spatial_mean_1995_2014.append(mean_1995_2014)
        historical_spatial_mean_1850_1900.append(mean_1850_1900)

    # means
    hist_spatial_mean = []
    for ds in historical_dss:
        weights = np.cos(np.deg2rad(ds["lat"]))
        spatial_mean = ds["tas"].chunk({"time": 100}).sel(time=slice("19500101", None)).weighted(weights).mean(["lat", "lon"]).compute(
            num_workers=nw, scheduler="processes")
        spatial_mean = spatial_mean.convert_calendar("gregorian", align_on="year")
        spatial_mean = spatial_mean.isel(time=~pd.to_datetime(spatial_mean["time"].values, errors="coerce").isna())
        spatial_mean["time"] = spatial_mean["time"].astype("datetime64[ns]")
        hist_spatial_mean.append(spatial_mean)
    ssp126_spatial_mean = []
    for ds in ssp126_dss:
        weights = np.cos(np.deg2rad(ds["lat"]))
        spatial_mean = ds["tas"].chunk({"time": 100}).weighted(weights).mean(["lat", "lon"]).compute(
            num_workers=nw, scheduler="processes")
        spatial_mean = spatial_mean.convert_calendar("gregorian", align_on="year")
        spatial_mean = spatial_mean.isel(time=~pd.to_datetime(spatial_mean["time"].values, errors="coerce").isna())
        spatial_mean["time"] = spatial_mean["time"].astype("datetime64[ns]")
        ssp126_spatial_mean.append(spatial_mean)
    ssp245_spatial_mean = []
    for ds in ssp245_dss:
        weights = np.cos(np.deg2rad(ds["lat"]))
        spatial_mean = ds["tas"].chunk({"time": 100}).weighted(weights).mean(["lat", "lon"]).compute(
            num_workers=nw, scheduler="processes")
        spatial_mean = spatial_mean.convert_calendar("gregorian", align_on="year")
        spatial_mean = spatial_mean.isel(time=~pd.to_datetime(spatial_mean["time"].values, errors="coerce").isna())
        spatial_mean["time"] = spatial_mean["time"].astype("datetime64[ns]")
        ssp245_spatial_mean.append(spatial_mean)
    ssp370_spatial_mean = []
    for ds in ssp370_dss:
        weights = np.cos(np.deg2rad(ds["lat"]))
        spatial_mean = ds["tas"].chunk({"time": 100}).weighted(weights).mean(["lat", "lon"]).compute(
            num_workers=nw, scheduler="processes")
        spatial_mean = spatial_mean.convert_calendar("gregorian", align_on="year")
        spatial_mean = spatial_mean.isel(time=~pd.to_datetime(spatial_mean["time"].values, errors="coerce").isna())
        spatial_mean["time"] = spatial_mean["time"].astype("datetime64[ns]")
        ssp370_spatial_mean.append(spatial_mean)
    ssp585_spatial_mean = []
    for ds in ssp585_dss:
        weights = np.cos(np.deg2rad(ds["lat"]))
        spatial_mean = ds["tas"].chunk({"time": 100}).weighted(weights).mean(["lat", "lon"]).compute(
            num_workers=nw, scheduler="processes")
        spatial_mean = spatial_mean.convert_calendar("gregorian", align_on="year")
        spatial_mean = spatial_mean.isel(time=~pd.to_datetime(spatial_mean["time"].values, errors="coerce").isna())
        spatial_mean["time"] = spatial_mean["time"].astype("datetime64[ns]")
    
        ref = np.datetime64("2015-01-01T12:00:00").astype("datetime64[ns]").astype(int)
        spatial_mean["time"] = spatial_mean["time"] + (ref - spatial_mean["time"][0].item())
        
        ssp585_spatial_mean.append(spatial_mean)

#    return historical_spatial_mean_1995_2014, historical_spatial_mean_1850_1900, hist_spatial_mean, ssp126_spatial_mean, ssp245_spatial_mean, ssp370_spatial_mean, ssp585_spatial_mean
    # concat
    mean_hist_1995_2014 = xarray.DataArray(
        data=[x.item() for x in historical_spatial_mean_1995_2014],
        coords={"member": [x.attrs["model_run"] for x in historical_dss]})
    mean_hist_1850_1900 = xarray.DataArray(
        data=[x.item() for x in historical_spatial_mean_1850_1900],
        coords={"member": [x.attrs["model_run"] for x in historical_dss]})
    mean_ssp126 = xarray.concat(
        ssp126_spatial_mean,
        dim=xarray.DataArray([x.attrs["model_run"] for x in ssp126_dss], dims="member"),
        coords="minimal",
        compat="override")
    mean_ssp245 = xarray.concat(
        ssp245_spatial_mean,
        dim=xarray.DataArray([x.attrs["model_run"] for x in ssp245_dss], dims="member"),
        coords="minimal",
        compat="override")
    mean_ssp370 = xarray.concat(
        ssp370_spatial_mean,
        dim=xarray.DataArray([x.attrs["model_run"] for x in ssp370_dss], dims="member"),
        coords="minimal",
        compat="override")
    mean_ssp585 = xarray.concat(
        ssp585_spatial_mean,
        dim=xarray.DataArray([x.attrs["model_run"] for x in ssp585_dss], dims="member"),
        coords="minimal",
        compat="override")

    return mean_hist_1995_2014, mean_hist_1850_1900, hist_spatial_mean, mean_ssp126, mean_ssp245, mean_ssp370, mean_ssp585

    # mean_hist_1995_2014_YE = (mean_hist - mean_hist_1995_2014).resample(time="YE").mean()
    # mean_ssp126_1995_2014_YE = (mean_ssp126 - mean_hist_1995_2014).resample(time="YE").mean()
    # mean_ssp245_1995_2014_YE = (mean_ssp245 - mean_hist_1995_2014).resample(time="YE").mean()
    # mean_ssp370_1995_2014_YE = (mean_ssp370 - mean_hist_1995_2014).resample(time="YE").mean()
    # mean_ssp585_1995_2014_YE = (mean_ssp585 - mean_hist_1995_2014).resample(time="YE").mean()
    
    # mean_hist_1850_1900_YE = (mean_hist - mean_hist_1850_1900).resample(time="YE").mean()
    # mean_ssp126_1850_1900_YE = (mean_ssp126 - mean_hist_1850_1900).resample(time="YE").mean()
    # mean_ssp245_1850_1900_YE = (mean_ssp245 - mean_hist_1850_1900).resample(time="YE").mean()
    # mean_ssp370_1850_1900_YE = (mean_ssp370 - mean_hist_1850_1900).resample(time="YE").mean()
    # mean_ssp585_1850_1900_YE = (mean_ssp585 - mean_hist_1850_1900).resample(time="YE").mean()
    
    # q_hist_1995_2014_YE = (mean_spatial_hist - mean_hist_1995_2014).resample(time="YE").mean().quantile([.05, .95], dim=["member"])
    # q_ssp126_1995_2014_YE = (mean_spatial_ssp126 - mean_hist_1995_2014).resample(time="YE").mean().quantile([.05, .95], dim=["member"])
    # q_ssp245_1995_2014_YE = (mean_spatial_ssp245 - mean_hist_1995_2014).resample(time="YE").mean().quantile([.05, .95], dim=["member"])
    # q_ssp370_1995_2014_YE = (mean_spatial_ssp370 - mean_hist_1995_2014).resample(time="YE").mean().quantile([.05, .95], dim=["member"])
    # q_ssp585_1995_2014_YE = (mean_spatial_ssp585 - mean_hist_1995_2014).resample(time="YE").mean().quantile([.05, .95], dim=["member"])

    # mean_scenarios_1995_2014 = xarray.concat([
    #     mean_ssp126_1995_2014_YE,
    #     mean_ssp245_1995_2014_YE,
    #     mean_ssp370_1995_2014_YE,
    #     mean_ssp585_1995_2014_YE],
    #     dim=xarray.Variable(["scenario"], ["ssp126", "ssp245", "ssp370", "ssp585"]))

    # mean_scenarios_1850_1900 = xarray.concat([
    # mean_ssp126_1850_1900_YE,
    # mean_ssp245_1850_1900_YE,
    # mean_ssp370_1850_1900_YE,
    # mean_ssp585_1850_1900_YE],
    # dim=xarray.Variable(["scenario"], ["ssp126", "ssp245", "ssp370", "ssp585"]))

    # q_scenarios_1995_2014 = xarray.concat([
    #     q_ssp126_1995_2014_YE,
    #     q_ssp245_1995_2014_YE,
    #     q_ssp370_1995_2014_YE,
    #     q_ssp585_1995_2014_YE],
    #     dim=xarray.Variable(["scenario"], ["ssp126", "ssp245", "ssp370", "ssp585"]))

    # return mean_hist_1995_2014_YE, mean_hist_1850_1900_YE, q_hist_1995_2014_YE, mean_scenarios_1995_2014, mean_scenarios_1850_1900, q_scenarios_1995_2014


def measure(name, nworkers, runs, *args):
    results = []
    for nw in nworkers:
        for run in range(runs):
            start_net = psutil.net_io_counters()
            start_time = time.time()
        
            compute(nw, *args)
        
            end_time = time.time()
            end_net = psutil.net_io_counters()
        
            result = {
                "name": name,
                "run": run,
                "time": end_time-start_time,
                "bytes_recv": end_net.bytes_recv-start_net.bytes_recv,
                "bytes_sent": end_net.bytes_sent-start_net.bytes_sent,
                "packets_recv": end_net.packets_recv-start_net.packets_recv,
                "packets_sent": end_net.packets_sent-start_net.packets_sent,
                "errin": end_net.errin-start_net.errin,
                "errout": end_net.errout-start_net.errout,
                "dropin": end_net.dropin-start_net.dropin,
                "dropout": end_net.dropout-start_net.dropout,
                "workers": nw
            }
    
            print(result)
            results.append(result)
    
    return results


if __name__ == "__main__":
    dask.config.set(scheduler="processes")

    df = pd.read_csv("../../../data_inventory.csv")

    # Only in GPFS
    subset = df.query('type == "netcdf" & variable == "t" & project == "CMIP6" & frequency == "mon"').copy()
    subset["location"] = subset["location"].str.replace("/home/jovyan/shared", "/gpfs/ces/share-7c11c2a4-9d9f-40f5-b95e-396bcbf3f608/HUB")

    # GPFS opendap
    #subset = df.query('type == "opendap" & variable == "t" & project == "CMIP6" & frequency == "mon"').copy()

    hist = xarray.open_dataset(subset[subset["experiment"] == "historical"]["location"].iloc[0])
    ssp126 = xarray.open_dataset(subset[subset["experiment"] == "ssp126"]["location"].iloc[0])
    ssp245 = xarray.open_dataset(subset[subset["experiment"] == "ssp245"]["location"].iloc[0])
    ssp370 = xarray.open_dataset(subset[subset["experiment"] == "ssp370"]["location"].iloc[0])
    ssp585 = xarray.open_dataset(subset[subset["experiment"] == "ssp585"]["location"].iloc[0])

    nworkers = [8, 4, 2, 1]
    runs = 5
    
    #nworkers = [4, 8]
    #runs = 2
    
    # local, opendap-hub-compressed, opendap-hub-uncompressed
    results = measure("local", nworkers, runs,
                      hist, ssp126, ssp245, ssp370, ssp585)

    pd.DataFrame.from_records(results).to_csv("gpfs.csv", index=False)
