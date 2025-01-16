# Jupyter Books

To build the books:

```bash
jupyter-book build --path-output book/R notebooks/R/
jupyter-book build --path-output book/python notebooks/python/
```

Move the `html` and `jupyter_execute` directories to `book/{R,python}`.
