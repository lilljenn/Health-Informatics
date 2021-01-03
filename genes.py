 if (!requireNamespace("BiocManager", quietly = TRUE))
     install.packages("BiocManager")
     
 BiocManager::install("CEMiTool")
 browseVignettes("CEMiTool
 BiocManager::install("limma")
 BiocManager::install("BiocGenerics")
 citation("BiocGenerics")
 limma::lmFit
 ?mean
 base::mean
  help(package="genefilter", help_type= "html")
  library(GSE5859Subset)
  BiocManager::install("genefilter")
  library(GSE5859Subset)
  BiocManager::install("GSE5859Subset")
  library(GSE5859Subset)
  BiocManager::install("ACME")
  browseVignettes("ACME")
   library(ACME)
   datdir <- system.file('extdata',package='ACME')
   fnames <- dir(datdir)
   fnames <- dir(datdir)
   example.agff <- read.resultsGFF(fnames,path=datdir)
   example.agff
   calc <- do.aGFF.calc(example.agff,window=1000,thresh=0.95)
   plot(calc,chrom='chr1',sample=1)
   regs <- findRegions(calc)
   regs[1:5,]
   write.sgr(calc)
   write.sgr(calc,raw=FALSE)
   write.bedGraph(calc)
   BiocManager::install("psycgenet2r")
   browseVignettes("psychgenet2r")
   library(psycgenet2r)
   BiocManager::install("ABAEnrichment")
   library(ABAEnrichment)
