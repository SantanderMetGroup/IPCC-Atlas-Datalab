Search.setIndex({"alltitles": {"1. Aim and motivation": [[0, "aim-and-motivation"]], "1. Libraries": [[1, "libraries"], [2, "libraries"]], "2. Data Preparation": [[2, "data-preparation"]], "2. Description of the available material within the datalab": [[0, "description-of-the-available-material-within-the-datalab"]], "2. The Global Warming Level analysis dimension": [[1, "the-global-warming-level-analysis-dimension"]], "3. Application of a land-sea mask": [[2, "application-of-a-land-sea-mask"]], "3. Data loading and basic data operations": [[0, "data-loading-and-basic-data-operations"]], "3. Data loading for the different GWLs": [[1, "data-loading-for-the-different-gwls"]], "3.3. The structure of the climate4R grid": [[0, "the-structure-of-the-climate4r-grid"]], "3.4. Initial Data Exploration Plots": [[0, "initial-data-exploration-plots"]], "3.5. Calculation of anomalies (future projections - historical simulations)": [[0, "calculation-of-anomalies-future-projections-historical-simulations"]], "3.6. Spatial aggregation": [[0, "spatial-aggregation"]], "4. Data loading for the historical reference": [[1, "data-loading-for-the-historical-reference"]], "4. Generate regionalized information": [[2, "generate-regionalized-information"]], "5. Uncertainty Calculation and Representation": [[1, "uncertainty-calculation-and-representation"]], "Complete Workflow Code Summary": [[1, "complete-workflow-code-summary"]], "Contents in this notebook": [[0, "contents-in-this-notebook"], [1, "contents-in-this-notebook"], [2, "contents-in-this-notebook"]], "Data": [[0, "data"]], "Getting started": [[0, "getting-started"]], "Projected climate change signals and uncertainty under global warming levels": [[1, "projected-climate-change-signals-and-uncertainty-under-global-warming-levels"]], "Regional averaging of climate information": [[2, "regional-averaging-of-climate-information"]], "Session Info": [[0, "session-info"], [1, "session-info"], [2, "session-info"]], "Software": [[0, "software"]]}, "docnames": ["getting_started", "maps_of_change/Maps_of_change_under_global-warming-levels", "regional_aggregation/Regional_aggregation_and_visualization"], "envversion": {"sphinx": 61, "sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9}, "filenames": ["getting_started.ipynb", "maps_of_change/Maps_of_change_under_global-warming-levels.ipynb", "regional_aggregation/Regional_aggregation_and_visualization.ipynb"], "indexentries": {}, "objects": {}, "objnames": {}, "objtypes": {}, "terms": {"": [0, 1], "0": [0, 1, 2], "00": [0, 1], "009": 0, "00z": [0, 1], "01": [0, 1], "01t00": [0, 1], "02": [0, 1, 2], "024006": 0, "03": [0, 1], "030582": 1, "035901": 2, "04": [0, 1, 2], "047954": 2, "048818": 1, "05": [1, 2], "058449": 1, "06": [0, 1], "07": [0, 2], "0732": 0, "077509": 1, "08": 0, "0801": 0, "086641": 1, "09": [0, 1, 2], "094116": 0, "096763": 0, "0_r1i1p1f1": [0, 1], "0_r2i1p1f1": [0, 1], "10": [0, 1, 2], "100": [0, 1], "10151": 0, "1016": 0, "102625": 2, "1032": 1, "105277": 0, "11": [0, 1, 2], "114017": 2, "12": [0, 1, 2], "13": [0, 1, 2], "14": [0, 1, 2], "143759": 1, "15": [0, 1, 2], "153": 0, "16": [0, 1, 2], "164966": 1, "165869": 0, "166797": 1, "17": [0, 1], "1726": [1, 2], "176": 1, "178": 1, "18": [0, 1], "180": 1, "182019": 1, "182602": 1, "1850": [0, 1, 2], "1851": 0, "185969": 0, "19": [0, 1, 2], "1900": [0, 1, 2], "196329": 1, "1_r1i1p1f2": [0, 1], "1http": 0, "20": [1, 2], "200512": 0, "2011": 1, "2012": 1, "2013": 1, "2014": 0, "201412": 1, "2015": [0, 1], "2018": 0, "2019": [0, 1], "2020": 1, "2021": 1, "2022": 1, "2023": [0, 1], "2024": [0, 1, 2], "2025": 1, "2026": 1, "2027": 1, "2028": 1, "2029": 1, "2030": 1, "2031": 1, "2032": 1, "2033": 1, "2034": 1, "2035": 1, "2036": 1, "2037": 1, "2038": 1, "2039": 1, "2040": 1, "2041": [0, 1, 2], "2042": 1, "2043": 1, "2045": 1, "2046": 1, "2047": 1, "2048": 1, "2049": 1, "2050": 1, "2051": 1, "2052": 1, "2053": 1, "2054": 1, "2055": 1, "205669": 1, "2057": 1, "2058": 1, "2059": 1, "2060": [0, 1, 2], "2062": 1, "2063": 1, "2064": 1, "2065": 1, "2066": 1, "2068": 1, "2069": 1, "2070": 1, "2071": 1, "2072": 1, "2073": 1, "2074": 1, "2075": 1, "2076": 1, "2077": 1, "2078": 1, "2079": 1, "2082": 1, "2083": 1, "2084": 1, "2085": 1, "2087": 1, "2088": 1, "209382": 0, "20x": 0, "21": [0, 1], "2100": 1, "210012": 1, "215631": 0, "216494": 1, "22": [0, 1, 2], "22x": 1, "23": [0, 1, 2], "235806": 1, "236048": 0, "237541": 0, "24": [1, 2], "246094": 0, "2475711759013p25": 0, "248896": 0, "249873": 2, "25": [0, 1, 2], "2559": 0, "26": [0, 1, 2], "262786": 1, "266306": 2, "27": [0, 1, 2], "272027": 0, "278633": 2, "28": [0, 1, 2], "282443": 2, "282897": 2, "29": [0, 1, 2], "290151": 1, "2http": 0, "30": [0, 1, 2], "306239": 0, "31": [0, 1, 2], "315452": 1, "318585": 2, "319743": 2, "32": 1, "33": 1, "34": [0, 1, 2], "344606": 2, "35": 1, "350713": 1, "357078": 1, "36": [0, 1, 2], "360": 1, "364917": 1, "369865": 0, "37": [0, 1, 2], "379066": 2, "38": 0, "39": 0, "3degc_ssp585_rel": 1, "3http": 0, "3\u00bac": 1, "40": [0, 1, 2], "40912": 1, "41": [0, 2], "42": [0, 1, 2], "421061": 1, "43": [0, 1, 2], "436": [0, 1], "44": 0, "441585": 0, "443421": 0, "451922": 2, "45488": 1, "456018": 0, "457539": 0, "459882": 0, "46": [0, 1, 2], "462046": 0, "464226": 0, "466114": 0, "466504": 1, "469941": 1, "472943": 2, "48203": 2, "488055": 1, "49": [0, 1, 2], "490852": 1, "494596": 1, "4http": 0, "5": 2, "50": [0, 1, 2], "501907": 1, "51": 2, "51715": 2, "52": [0, 1, 2], "526133": 0, "528503": 2, "53": 1, "541033": 2, "546959": 0, "549951": 1, "55": [0, 1, 2], "564657": 1, "56635": 2, "57": 0, "58": [0, 1, 2], "580067": 2, "582012": 2, "589599": 2, "59": [0, 1], "598088": 2, "5_r1i1p1f1": [0, 1], "5_ssp126": 1, "5_ssp245": 1, "5_ssp370": 1, "5_ssp585": 1, "5http": 0, "6": [1, 2], "60": [0, 1, 2], "608355": 1, "61": [0, 1, 2], "613328": 0, "630434": 2, "64": [0, 1, 2], "657921": 0, "659808": 2, "6696350110102p75": 0, "67": [0, 1, 2], "676278": 0, "694737": 0, "6http": 0, "7": [0, 1, 2], "70": [1, 2], "700109": 1, "706641": 0, "71262": 0, "716086": 1, "72": 1, "723499": 1, "73": [1, 2], "745056": 0, "75": 0, "758623": 0, "766294": 0, "7728": 0, "7773": 0, "77http": 1, "78": 2, "794434": 1, "795392": 2, "795996": 1, "798872": 1, "8": [0, 1, 2], "80": 1, "805385": 0, "81": 1, "818408": 0, "82": 1, "821689": 1, "827338": 0, "83": 1, "832": 0, "832333": 1, "84": 1, "843148": 1, "84402": 2, "85": 1, "86": 1, "860172": 1, "87": 1, "8717848503489": 0, "88": 1, "8827": 1, "89": 1, "892769": 1, "8_r1i1p1f1": [0, 1], "9": [0, 1, 2], "926658": 1, "931243": 1, "940": 1, "966025": 2, "98": [0, 1, 2], "996502": 2, "996818": 1, "9999": 1, "A": [0, 1], "AS": 0, "As": [0, 1], "At": 0, "By": 0, "For": [0, 1, 2], "If": 0, "In": [0, 1, 2], "It": [0, 1, 2], "THE": 1, "The": 2, "These": [0, 1, 2], "To": [0, 1, 2], "_": [0, 1], "__": [0, 1], "___": [0, 1], "____": [0, 1], "_______": [0, 1], "________": [0, 1], "___________________": [0, 1], "__truncated__": [0, 1, 2], "abind_1": [0, 1, 2], "about": 1, "abov": [0, 1], "absolut": 1, "acceler": 0, "access": [0, 1, 2], "accord": 0, "accumul": [0, 1], "achiev": [0, 1], "acronym": 2, "across": 1, "ad": [1, 2], "addit": [0, 1], "addition": [0, 1], "adjust": 2, "adopt": 2, "advanc": 1, "after": 2, "afterward": 2, "again": 2, "aggr": [0, 1, 2], "aggreg": [1, 2], "aggregategrid": [0, 1, 2], "aim": 2, "akima_0": [0, 1, 2], "al": [0, 1], "all": [1, 2], "allow": [0, 1, 2], "along": 2, "also": [0, 1, 2], "although": 2, "alwai": [0, 1, 2], "amd64": [0, 1], "an": [0, 1, 2], "analysi": 0, "analyz": 1, "ani": [0, 1, 2], "annual": [0, 1, 2], "anom": 0, "anomali": [1, 2], "anoth": 0, "ant": [0, 1, 2], "ant_h": [1, 2], "ant_histo": [1, 2], "ant_historical_mon_197001": 0, "anthistoricalmon": 0, "appli": [0, 1, 2], "approach": 2, "appropri": [0, 2], "apr": [0, 1], "ar": [0, 1, 2], "ar6": [0, 1, 2], "arccss_access": [0, 1], "archiv": [0, 1, 2], "area": [0, 1, 2], "areal": [0, 2], "argument": 0, "arithmet": 1, "arrai": [0, 1, 2], "assess": [0, 1], "assist": 0, "atla": [0, 1, 2], "attach": [0, 1, 2], "attr": [0, 2], "attribut": [0, 1, 2], "automat": 0, "avail": [1, 2], "awi": 1, "axi": 2, "backdrop": [0, 1, 2], "base": [0, 1, 2], "base64enc_0": [0, 1, 2], "baselin": [1, 2], "bcc": 1, "bcc_bcc": [0, 1], "becaus": 1, "becom": [0, 1], "befor": [0, 1, 2], "begin": 0, "behind": 0, "being": 1, "below": 2, "benefit": 0, "between": [0, 1], "bia": 0, "binari": [1, 2], "binarygrid": 2, "bind": 2, "bindgrid": [1, 2], "bit": [0, 1, 2], "bitops_1": [0, 1, 2], "bla": [0, 1, 2], "blue": 0, "boot_1": [0, 1, 2], "boreal": [0, 1, 2], "both": [0, 1, 2], "box": 1, "boxplot": 0, "brbg": [0, 1], "brewer": 1, "bundl": [1, 2], "c": [0, 1, 2], "c4r": 2, "calcul": 2, "cam": 1, "cams_cam": [0, 1], "can": [0, 1, 2], "canesm5_r1i1p1f1": 1, "cantabria": [0, 1, 2], "carri": 2, "cas_fgoal": 0, "case": [0, 1, 2], "cat1": 1, "catalog": [0, 1], "cccma_canesm5_r1i1p1f1": 0, "cccr": 0, "cd": [0, 1, 2], "cell": 2, "central": 1, "centuri": 1, "cerfacs_cnrm": 0, "cesm2": 1, "cesm2_r4i1p1f1": 1, "chang": [0, 2], "change_warm": 1, "chapter": 1, "character": 1, "characterist": 0, "check": [0, 1, 2], "choos": 1, "chr": [0, 1, 2], "chunk": [0, 1], "circstats_0": [0, 1, 2], "citat": [0, 1], "cite": [0, 1], "clarifi": 0, "class_7": [1, 2], "classint_0": [1, 2], "cli_3": [0, 1, 2], "clim": 1, "climat": 0, "climate4r": [1, 2], "climatologi": [0, 1, 2], "cm": 1, "cm2": [0, 1], "cm2_r1i1p1f1": [0, 1], "cm4": [0, 1], "cm4_r1i1p1f1": [0, 1], "cm5": [0, 1], "cm6": [0, 1], "cm6a": [0, 1], "cmcc": 1, "cmcc_cmcc": 0, "cmip": 1, "cmip5": [0, 1, 2], "cmip6": [0, 1, 2], "cmip6_atlas_warminglevel": 1, "cmip6_tot": 1, "cnrm": [0, 1], "coastlin": [0, 1, 2], "code": 0, "codetools_0": 2, "col": 0, "collect": 0, "color": [0, 1, 2], "colorbrew": 1, "colorspace_2": [0, 1, 2], "column": 0, "com": [0, 1, 2], "combin": [0, 1], "come": 0, "common": [0, 1, 2], "compiler_4": [0, 1, 2], "compon": 0, "comput": [0, 1, 2], "computeuncertainti": 1, "concept": 1, "conda": [0, 1, 2], "condit": [1, 2], "conduct": 0, "confirm": 1, "consid": [0, 1, 2], "consist": 2, "consortium_ec": 0, "contain": [0, 1, 2], "continu": [0, 1, 2], "control": 0, "convert": 1, "coordin": [0, 1, 2], "copernicu": [0, 1, 2], "cordex": [0, 1, 2], "core": [0, 1], "correct": 0, "correspond": [0, 1], "could": [0, 1, 2], "cover": 1, "crayon_1": [0, 1, 2], "creat": [0, 1, 2], "creativ": [0, 1, 2], "criteria": 1, "cross": 1, "csic": [0, 1, 2], "csiro": [0, 1], "csiro_access": [0, 1], "csm1": [0, 1], "csm2": [0, 1], "csv": [0, 1, 2], "curl": 2, "curl_download": 2, "current": [0, 1], "custom": [0, 1, 2], "d": 1, "dai": [0, 1], "daili": [0, 1], "daily_agg_cellfun": 0, "data_inventori": [0, 1, 2], "datainventori": [0, 1], "dataset": [0, 1, 2], "datasizemb": 1, "datatyp": 1, "date": [0, 1], "date_rang": [0, 1], "datum": 2, "dbi_1": [1, 2], "de": [0, 1, 2], "default": [0, 1, 2], "defin": [0, 1, 2], "degre": 2, "degrees_east": 1, "degrees_north": 1, "deldir_2": [0, 1, 2], "delta": [1, 2], "delv": 0, "demonstr": 2, "densiti": 1, "depend": 1, "descript": [1, 2], "desir": [0, 1, 2], "detail": [1, 2], "detect": [0, 1], "determin": 1, "dev": 1, "devtool": [0, 1], "df": 0, "di": [0, 1], "dic": 1, "differ": [0, 2], "digest_0": [0, 1, 2], "digit": [0, 1, 2], "dimens": [0, 2], "directli": [0, 1, 2], "directori": 1, "displai": 0, "dispos": 0, "divers": 0, "divid": 0, "do": [0, 1, 2], "dodsc": [0, 1, 2], "doe": 1, "doi": 0, "domain": [1, 2], "done": [0, 1, 2], "dotcall64_1": [0, 1, 2], "down": [0, 1, 2], "downscal": 0, "dplyr_1": [0, 1], "driver": 2, "dtw_1": [0, 1, 2], "duplic": 2, "dure": [0, 1, 2], "e": [0, 1, 2], "e1071_1": [1, 2], "each": [1, 2], "earlier": [1, 2], "earth": 0, "earth3": [0, 1], "earth3_r1i1p1f1": [0, 1], "easi": 0, "easili": [0, 1, 2], "easyverification_0": [0, 1, 2], "ec": [0, 1], "effect": 0, "effici": 0, "effort": 0, "either": 1, "elimin": 1, "emploi": [1, 2], "en": [0, 1, 2], "en_u": [0, 1, 2], "enabl": [0, 1], "encompass": 0, "end": [0, 1], "ensembl": [0, 1, 2], "ensur": [1, 2], "entir": 0, "env": [1, 2], "environ": 0, "envsoft": 0, "equal": 2, "equival": 2, "era": 0, "error": 1, "es2l_r1i1p1f2": [0, 1], "es_": 0, "esm1": [0, 1], "esm2": [0, 1], "esm4_r1i1p1f1": [0, 1], "esm_r1i1p1f1": [0, 1], "essenti": [1, 2], "et": [0, 1], "etc": [0, 1, 2], "eur": [0, 1, 2], "europ": 0, "evaluate_1": [0, 1, 2], "exampl": [0, 1, 2], "execut": 0, "experi": [0, 1, 2], "explan": [1, 2], "export": 1, "express": [1, 2], "extend": 0, "extract": [0, 1], "f": 2, "facilit": 0, "factor": [0, 1, 2], "fals": [0, 2], "fansi_1": [0, 1, 2], "fastmap_1": [0, 1, 2], "featur": 2, "few": 1, "fgoal": 1, "field": 2, "fields_16": [0, 1, 2], "figur": 1, "file": [0, 1, 2], "fileext": 2, "filter": [0, 1, 2], "final": [0, 1], "fine": 1, "first": [0, 1, 2], "fix": [0, 1], "float": 1, "focu": [1, 2], "follow": [0, 1, 2], "foreach_1": 2, "forecast": 0, "four": 0, "frame": [0, 1, 2], "framework": [0, 1, 2], "frequenc": [0, 1, 2], "from": [0, 1, 2], "fun": [0, 1, 2], "function": [0, 1, 2], "fundament": 0, "further": 0, "fut": [0, 2], "futur": [1, 2], "f\u00edsica": [1, 2], "g": [0, 1, 2], "g3_r1i1p1f1": [0, 1], "g_r2i1p1f1": [0, 1], "gc31": [0, 1], "gcm": 1, "gdalutils_2": 2, "gener": 1, "generics_0": [0, 1], "geo": [0, 1, 2], "geograph": [1, 2], "geojson": 2, "geoprocessor": [1, 2], "geoprocessor_0": 2, "get": [1, 2], "getshap": 2, "gettimedomain": 1, "getting_start": [1, 2], "gfdl": 1, "gfdl_gfdl": 0, "github": [0, 1, 2], "githubusercont": 2, "given": 2, "glibc": [0, 1, 2], "glue_1": [0, 1, 2], "gmt": 0, "gnu": [0, 1, 2], "go": [0, 2], "good": [0, 1, 2], "graphic": [0, 1, 2], "grdevic": [0, 1, 2], "grep": 1, "grid": [1, 2], "grid_4": [0, 1, 2], "gridarithmet": [0, 1, 2], "group": [0, 1, 2], "gt": [0, 1, 2], "guidelin": 0, "guti\u00e9rrez": 1, "gwl3": 1, "ha": 2, "hadgem3": 1, "har": 0, "hatch": 1, "have": [0, 1], "head": [0, 1, 2], "height": [0, 1, 2], "help": 0, "here": [0, 2], "hisror": 2, "hist": [0, 1, 2], "histor": 2, "home": [0, 1], "howev": 0, "hr_r1i1p1f1": [0, 1], "hr_r1i1p1f2": [0, 1], "htmltools_0": [0, 1, 2], "http": [0, 1, 2], "hub": [0, 1, 2], "i": [0, 1, 2], "ia": [0, 1, 2], "iberian": 0, "ident": [0, 1, 2], "ifca": [0, 1, 2], "ignor": 0, "iitm": 1, "iitm_iitm": 0, "illustr": [1, 2], "implement": 1, "includ": [0, 1], "ind": 1, "index": [0, 1, 2], "indic": 2, "industri": [1, 2], "inform": [0, 1], "initializationd": 0, "inm": 1, "inm_inm": 0, "insid": [1, 2], "insight": 0, "instal": 0, "install_github": [0, 1], "instanc": 0, "instead": 1, "institut": 0, "instituto": [1, 2], "int": 1, "integr": 0, "interact": [0, 1, 2], "intern": [0, 1, 2], "interp_1": [0, 1, 2], "interpol": 0, "interrupt": 1, "intersect": [0, 2], "intersectgrid": [0, 1, 2], "interv": 0, "introduc": 1, "introduct": [1, 2], "inventori": [0, 1], "investig": 0, "ipcc": [0, 1, 2], "ipsl": 1, "ipsl_ipsl": 0, "ipynb": [1, 2], "irdisplay_1": [0, 1, 2], "irkernel_1": [0, 1, 2], "isn": 1, "iter": 1, "iterators_1": 2, "its": [0, 1], "iturbid": [0, 1, 2], "j": 0, "java": [0, 1], "java_1": [0, 1, 2], "jja": [0, 2], "jovyan": 1, "jpeg_0": [0, 1, 2], "jsonlite_1": [0, 1, 2], "jupyt": 1, "just": 0, "kace": 1, "keep": 1, "kernel": 0, "kernsmooth_2": [1, 2], "kiost": 1, "kiost_kiost": 0, "kma_kac": 0, "known": 0, "kohonen_3": [0, 1, 2], "l": 1, "land_sea_mask_1degre": 2, "lapack": [0, 1, 2], "lappli": 1, "lat": [0, 1], "latest": [0, 1], "latitud": 0, "latlim": [0, 1, 2], "latlonproject": [0, 2], "lattic": [0, 1, 2], "lattice_0": [0, 1, 2], "latticeextra_0": [0, 1, 2], "layer": [1, 2], "layout": [0, 1, 2], "lc_address": [0, 1, 2], "lc_collat": [0, 1, 2], "lc_ctype": [0, 1, 2], "lc_identif": [0, 1, 2], "lc_measur": [0, 1, 2], "lc_messag": [0, 1, 2], "lc_monetari": [0, 1, 2], "lc_name": [0, 1, 2], "lc_numer": [0, 1, 2], "lc_paper": [0, 1, 2], "lc_telephon": [0, 1, 2], "lc_time": [0, 1, 2], "legaci": 0, "length": [1, 2], "lengthi": 1, "less": 0, "let": [0, 1], "level": [0, 2], "leverag": 0, "lib": [0, 1, 2], "libcurl": 2, "libopenblasp": [0, 1, 2], "librari": 0, "licens": [0, 1, 2], "lifecycle_1": [0, 1, 2], "line": [0, 2], "linux": [0, 1, 2], "list": [0, 1, 2], "ll_r1i1p1f2": [0, 1], "ll_r1i1p1f3": [0, 1], "lm_r1i1p1f1": [0, 1], "load": 2, "loader": [0, 1, 2], "loader_1": [0, 1, 2], "loadgriddata": [0, 1, 2], "local": [0, 1, 2], "locat": [0, 1, 2], "locationtypevariableprojectexperimentfrequ": [0, 1], "log": 1, "logi": [0, 1], "lon": [0, 1], "long": [0, 1, 2], "longlat": 2, "longnam": 0, "lonlim": [0, 1, 2], "look": 0, "loop": 1, "lr_r1i1p1f1": [0, 1], "lt": [0, 1, 2], "m": [0, 1, 2], "m_mpi": 0, "madrid": 0, "magrittr": [0, 1, 2], "magrittr_2": [0, 1, 2], "mai": [0, 2], "main": [0, 1, 2], "make": [0, 1, 2], "manag": 0, "mani": 0, "map": [0, 1, 2], "mapplots_1": [0, 1, 2], "maps_3": [0, 1, 2], "mass_7": [0, 1, 2], "match": [0, 1], "matrix": [0, 1, 2], "max": [0, 1, 2], "maximum": 2, "mean": [0, 1, 2], "meaning": 0, "med": 2, "medioum": 2, "mediterranean": 2, "meet": 1, "mem": [0, 1, 2], "member": [0, 1, 2], "mention": 1, "menu": 0, "messag": 1, "meteorologi": [0, 1, 2], "method": [0, 1, 2], "methodss3_1": 2, "min": [0, 1, 2], "miniconda3": 0, "minim": 1, "minu": 1, "minut": 1, "miroc": 1, "miroc6_r1i1p1f1": 1, "miroc_miroc": 0, "miroc_miroc6_r1i1p1f1": 0, "mirror": 2, "mitig": 0, "mm": [0, 1], "mm_r1i1p1f1": [0, 1], "mode": [0, 1, 2], "model": [0, 1, 2], "model_run": 1, "mohc_hadgem3": 0, "mohc_ukesm1": 0, "mon": [1, 2], "month": [0, 2], "monthli": [0, 1, 2], "monthly_agg_cellfun": 0, "more": [0, 1, 2], "mpi": [0, 1], "mr_r1i1p1f1": [0, 1], "mri": 1, "mri_mri": 0, "much": 1, "multi": [0, 1, 2], "multipl": 1, "munsell_0": [0, 1, 2], "must": [0, 1, 2], "n": [0, 1], "na": [0, 1, 2], "name": [0, 2], "namespac": [0, 1, 2], "narrow": [0, 1, 2], "nc": [0, 1, 2], "nc4": 2, "ncar_cesm2": 0, "ncar_cesm2_r4i1p1f1": 0, "ncc_noresm2": 0, "ncml": [0, 1], "ncopendapprcmip6ssp585mon": 1, "ncopendaprx1daycordex": 0, "necessari": [1, 2], "need": [0, 1, 2], "nesm3_r1i1p1f1": 1, "netcdf": [0, 1, 2], "new": 0, "newli": 1, "next": [0, 1, 2], "nim": 0, "no_def": 2, "noaa": 0, "nodata": 1, "none": 0, "noresm2": 1, "note": [0, 1, 2], "now": [0, 1, 2], "nuist_nesm3_r1i1p1f1": 0, "null": [0, 1], "num": [0, 1], "number": 2, "ob": [1, 2], "object": [0, 1], "obtain": [1, 2], "off": 1, "offer": 0, "ogr": 2, "onc": [0, 1], "one": 2, "onli": [0, 2], "oo_1": 2, "open": [0, 1, 2], "opendap": [0, 1, 2], "opendappr": 0, "opendaptn": 0, "opendaptnn": 0, "opendaptx": 0, "opendaptxx": 0, "openssl": 2, "oper": [1, 2], "opt": [1, 2], "option": [0, 1, 2], "orang": 0, "order": [1, 2], "org": 0, "origin": [0, 1, 2], "other": [0, 1, 2], "our": [0, 1, 2], "out": 2, "outcom": [1, 2], "outlin": 0, "output": [0, 1], "over": [0, 1, 2], "overarch": 0, "overgrid": 2, "overlai": 2, "overview": 1, "p25": 0, "p75": 0, "packag": [0, 1, 2], "pad": 0, "padr_0": [0, 1, 2], "palett": [0, 1], "panel": 1, "parallel_4": [0, 1, 2], "paramet": [0, 1, 2], "particular": [1, 2], "pass": [1, 2], "path": [0, 1, 2], "pbapply_1": [0, 1, 2], "pbdzmq_0": [0, 1, 2], "pdf": 1, "peninsula": 0, "per": 0, "percentil": 0, "perform": [0, 1, 2], "period": [0, 1, 2], "physic": 0, "piec": 2, "pillar_1": [0, 1, 2], "pipe": [0, 1], "pkgconfig_2": [0, 1], "place": 1, "platform": [0, 1, 2], "pleas": [0, 1, 2], "plot": [1, 2], "plu": 1, "png_0": [0, 1, 2], "point": [0, 1], "posit": [1, 2], "power": 0, "pr": [0, 1, 2], "pr_cmip6_historical_mon_": 0, "pr_cmip6_historical_mon_185001": 1, "pr_cmip6_ssp585_mon_201501": 1, "pr_cordex": [0, 1, 2], "practic": [0, 1, 2], "prcmip6ssp585mon": 1, "pre": [0, 1, 2], "precipit": [0, 1, 2], "preindustri": [0, 1], "prevent": 1, "previous": [0, 1, 2], "print": 1, "prob": 0, "process": 1, "product": [0, 1, 2], "proj": 2, "proj4str": 2, "project": 2, "promot": 0, "provid": [0, 1], "proxy_0": [0, 1, 2], "publish": [0, 1, 2], "purpos": 0, "python": 0, "quantil": 0, "quick": [1, 2], "r": [0, 1, 2], "r0": [0, 1, 2], "r6_2": [0, 1, 2], "r_package_desc": 0, "r_package_ref": 0, "r_package_url": 0, "rang": 0, "raster_3": 2, "raw": [1, 2], "rcec_taiesm1_r1i1p1f1": 0, "rcolorbrew": [1, 2], "rcolorbrewer_1": [0, 1, 2], "rcp26": [0, 1, 2], "rcp85": [0, 1, 2], "rcpp_1": [0, 1, 2], "rcppeigen_0": [0, 1, 2], "rcurl_1": [0, 1, 2], "reach": 1, "read": [0, 1, 2], "readi": [0, 1, 2], "readili": 1, "readogr": 2, "realm": 0, "recogn": 0, "red": 2, "redefin": 2, "ref": [1, 2], "refer": [0, 2], "referst": [0, 1, 2], "reg": 2, "region": 1, "regional_mean": 0, "rel": [0, 1, 2], "relat": 0, "remain": [0, 1], "remot": [0, 1, 2], "remov": 1, "rep": 2, "repeat": 1, "report": 1, "repositori": [0, 1, 2], "repr": [0, 1, 2], "repr_1": [0, 1, 2], "repres": 1, "reproduc": [0, 1, 2], "request": 1, "requir": [0, 1], "research": 0, "resi": 0, "resolut": 0, "resourc": 0, "rest": 1, "result": [0, 1, 2], "resx": 0, "retain": [0, 1, 2], "retriev": [0, 1, 2], "return": [0, 1, 2], "reusabl": 0, "rev": 2, "rgdal": 2, "rgdal_1": 2, "rjava": [0, 1], "rjava_1": [0, 1, 2], "rlang_1": [0, 1, 2], "rm": [0, 1, 2], "robust": 0, "row": 1, "run": [0, 1, 2], "rx1dai": [0, 1, 2], "rx1day_cordex": [0, 1, 2], "same": [0, 1, 2], "santand": [0, 1, 2], "santandermetgroup": [0, 1, 2], "scales_1": [0, 1, 2], "scenario": [0, 1, 2], "scientif": 0, "season": [0, 1, 2], "second": 1, "section": 0, "see": [0, 1], "seem": 2, "select": [0, 1, 2], "separ": 1, "seq": [0, 1, 2], "seri": [0, 1], "serv": [0, 2], "sessioninfo": [0, 1, 2], "set": [0, 1, 2], "sever": 0, "sf_1": [1, 2], "sftlf": 2, "shadow": 0, "shape": 1, "share": 1, "show": [0, 2], "shown": 1, "signal": 2, "signific": 0, "significantli": 1, "similar": 2, "simpl": [1, 2], "simpler": 1, "simpli": 0, "simplic": 1, "simplifi": 1, "sinc": [0, 1], "singl": [0, 1], "singular": 1, "sixth": 1, "size": [0, 1, 2], "skip": [1, 2], "slot": [0, 1, 2], "sm_2": [0, 1, 2], "snapshot": [0, 1], "so": [0, 1, 2], "societi": 0, "solid": 0, "sourc": [0, 1, 2], "sp": [1, 2], "sp_2": [0, 1, 2], "space": 1, "spain": [0, 1, 2], "spam_2": [0, 1, 2], "span": 1, "spatial": [1, 2], "spatiallin": 1, "spatialplot": [0, 1, 2], "spatialpolygon": 2, "spatio": [0, 1], "specif": [0, 1], "specifi": [0, 1], "specsverification_0": [0, 1, 2], "spread": 0, "sr5_r1i1p1f1": [0, 1], "ssp126": [0, 1, 2], "ssp370": 2, "ssp5": 1, "ssp585": [0, 1, 2], "stabl": [0, 1], "stage": [0, 1, 2], "start": [1, 2], "stat": [0, 1, 2], "static": 2, "statist": 2, "statu": 1, "step": [0, 2], "storag": 0, "store": [0, 1, 2], "str": [0, 1, 2], "strictli": 1, "strip": [0, 1, 2], "stripe": 2, "stripeplot": 2, "studi": 2, "subsequ": [0, 2], "subset": [0, 1, 2], "subtract": 2, "successfuli": [0, 1], "successfulli": 1, "summer": [0, 2], "support": 0, "suppressmessag": 1, "suppresswarn": [1, 2], "sure": [0, 1, 2], "surfac": 1, "synthes": 2, "system": [0, 1, 2], "t": [0, 1, 2], "ta": [0, 1, 2], "tabl": 1, "table_1": [0, 1, 2], "taiesm1_r1i1p1f1": 1, "take": [0, 1], "target": [1, 2], "technologi": 0, "temp": 2, "temperatur": [1, 2], "tempfil": 2, "tempor": [0, 1, 2], "temporalplot": [0, 1], "term": [0, 1, 2], "terra_1": 2, "text": 2, "than": 0, "thei": 2, "them": 2, "theme": [0, 1, 2], "therebi": 0, "therefor": [0, 1, 2], "though": 1, "thredd": [0, 1, 2], "threshold": [1, 2], "through": [0, 1, 2], "tibble_3": [0, 1], "tidyselect_1": [0, 1], "time": [0, 1, 2], "timestep": [0, 1], "tn": [0, 1, 2], "tn_cordex": [0, 1, 2], "tnn_cordex": 0, "tools_4": [0, 1, 2], "top": 2, "total": 1, "transform": [0, 1, 2], "transformer_2": [0, 1, 2], "transpar": 0, "trick": 2, "true": [0, 1, 2], "trycatch": 1, "tune": 1, "two": 1, "tx": [1, 2], "tx_cordex": [0, 1, 2], "txx": 2, "txx_cordex": 0, "type": [0, 1, 2], "tzcode": [0, 1, 2], "u": 1, "ubuntu": [0, 1, 2], "uc": [0, 1, 2], "udg": [0, 1], "udg_0": [0, 1, 2], "ukesm1": 1, "uncert": 1, "undefin": 2, "under": [0, 2], "underli": 0, "unit": [0, 1], "units_0": [1, 2], "unlist": 1, "unnecessari": 1, "up": [0, 1], "url": [1, 2], "us": [0, 1, 2], "use_dictionari": 0, "user": 0, "utc": [1, 2], "utf": [0, 1, 2], "utf8_1": [0, 1, 2], "util": [0, 1, 2], "utils_2": 2, "uuid_1": [0, 1, 2], "v1": [0, 1], "v2": [0, 1], "v4": [0, 1, 2], "valu": [0, 1, 2], "var": [0, 1, 2], "vari": 1, "variabl": [0, 1, 2], "variou": 1, "varnam": 0, "vctrs_0": [0, 1, 2], "vector": 1, "vectori": 1, "veg": [0, 1], "veg_r1i1p1f1": [0, 1], "verifi": 1, "verification_1": [0, 1, 2], "verification_tim": 0, "version": [0, 1, 2], "via": [0, 1, 2], "vioplot_0": [0, 1, 2], "viridislite_0": [0, 1, 2], "visual": [0, 1, 2], "visualizer_1": [0, 1, 2], "wa": [0, 1], "waccm_r1i1p1f1": [0, 1], "wai": 0, "walk": 0, "want": 2, "warm": 2, "warn": [0, 1], "we": [0, 1, 2], "wealth": 0, "websit": 1, "weight": [0, 2], "welcom": 0, "wg": 0, "wg1": 2, "wgi": [0, 1, 2], "wgi_ar6_interactive_atlas_dataset": 1, "wgs84": 2, "what": 1, "when": [1, 2], "where": [1, 2], "which": [0, 1, 2], "while": 1, "wide": 0, "width": [0, 1, 2], "window": 1, "winter": [1, 2], "within": [1, 2], "withr_3": [0, 1], "word": [1, 2], "work": [0, 1, 2], "worth": 0, "x": [0, 1], "x1": 1, "x2_ssp126": 1, "x2_ssp245": 1, "x2_ssp370": 1, "x2_ssp585": 1, "x3_ssp126": 1, "x3_ssp245": 1, "x3_ssp370": 1, "x3_ssp585": 1, "x4_ssp126": 1, "x4_ssp245": 1, "x4_ssp370": 1, "x4_ssp585": 1, "x86_64": [0, 1, 2], "xycoord": [0, 2], "xycoordin": 0, "xyplot": 0, "y": [0, 1, 2], "year": [0, 1, 2], "yearli": [0, 2], "yield": 1, "ylorbr": 2, "you": 0, "your": [0, 1], "zequi": 0, "zone": [0, 1, 2], "zoo_1": [0, 1, 2], "\u00bac": 2}, "titles": ["Getting started", "Projected climate change signals and uncertainty under global warming levels", "Regional averaging of climate information"], "titleterms": {"1": [0, 1, 2], "2": [0, 1, 2], "3": [0, 1, 2], "4": [0, 1, 2], "5": [0, 1], "6": 0, "The": [0, 1], "aggreg": 0, "aim": 0, "analysi": 1, "anomali": 0, "applic": 2, "avail": 0, "averag": 2, "basic": 0, "calcul": [0, 1], "chang": 1, "climat": [1, 2], "climate4r": 0, "code": 1, "complet": 1, "content": [0, 1, 2], "data": [0, 1, 2], "datalab": 0, "descript": 0, "differ": 1, "dimens": 1, "explor": 0, "futur": 0, "gener": 2, "get": 0, "global": 1, "grid": 0, "gwl": 1, "histor": [0, 1], "info": [0, 1, 2], "inform": 2, "initi": 0, "land": 2, "level": 1, "librari": [1, 2], "load": [0, 1], "mask": 2, "materi": 0, "motiv": 0, "notebook": [0, 1, 2], "oper": 0, "plot": 0, "prepar": 2, "project": [0, 1], "refer": 1, "region": 2, "represent": 1, "sea": 2, "session": [0, 1, 2], "signal": 1, "simul": 0, "softwar": 0, "spatial": 0, "start": 0, "structur": 0, "summari": 1, "thi": [0, 1, 2], "uncertainti": 1, "under": 1, "warm": 1, "within": 0, "workflow": 1}})