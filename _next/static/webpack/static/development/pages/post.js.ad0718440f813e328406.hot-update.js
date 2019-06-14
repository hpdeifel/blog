webpackHotUpdate("static/development/pages/post.js",{

/***/ "../posts-built/2019/rga--ripgrep-for-zip-targz-docx-odt-epub-jpg.md.json":
/*!********************************************************************************!*\
  !*** ../posts-built/2019/rga--ripgrep-for-zip-targz-docx-odt-epub-jpg.md.json ***!
  \********************************************************************************/
/*! exports provided: filename, frontmatter, preview, content_md, default */
/***/ (function(module) {

module.exports = {"filename":"2019/rga--ripgrep-for-zip-targz-docx-odt-epub-jpg.md","frontmatter":{"title":"((draft)) rga: ripgrep, but also search in PDFs, E-Books, Office documents, zip, tar.gz, etc.","date":"2019-06-16T00:00:00.000Z"},"preview":"rga is a line-oriented search tool that allows you to look for a regex in a multitude of file types. rga wraps the awesome ripgrep and enables it to search in pdf, docx, sqlite, jpg, movie subtitles (mkv, mp4), etc. github repo Linux build status Crates.io fearless concurrency Examples PDFs Say you ","content_md":"\nrga is a line-oriented search tool that allows you to look for a regex in a multitude of file types. rga wraps the awesome [ripgrep] and enables it to search in pdf, docx, sqlite, jpg, movie subtitles (mkv, mp4), etc.\n\n[![github repo](https://img.shields.io/badge/repo-github.com%2Fphiresky%2Fripgrep--all-informational.svg)](https://github.com/phiresky/ripgrep-all)\n[![Linux build status](https://api.travis-ci.org/phiresky/ripgrep-all.svg)](https://travis-ci.org/phiresky/ripgrep-all)\n[![Crates.io](https://img.shields.io/crates/v/ripgrep-all.svg)](https://crates.io/crates/ripgrep-all)\n[![fearless concurrency](https://img.shields.io/badge/concurrency-fearless-success.svg)](https://www.reddit.com/r/rustjerk/top/?sort=top&t=all)\n\n## Examples\n\n### PDFs\n\nSay you have a large folder of papers or lecture slides, and you can't remember which one of them mentioned `GRU`s. With rga, you can just run this:\n\n<pre class=\"ansi2html language-none\">\n~$ rga \"GRU\" slides/\n\n<span class=\"ansi35\">slides/2016/winter1516_lecture10.pdf</span>\nPage 79:                      <span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">GRU</span> [Learning phrase\nPage 80:    - Common to use LSTM or <span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">GRU</span>: their additive interactions\n\n<span class=\"ansi35\">slides/2016/winter1516_lecture14.pdf</span>\nPage 33:                                                               (<span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">GRU</span>)\nPage 34:   <span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">GRU</span>                                                LSTM\nPage 35:   <span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">GRU</span>                                   CONV\nPage 38:     - Try out <span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">GRU</span>-RCN! (imo best model)\n\n<span class=\"ansi35\">slides/2017/cs231n_2017_lecture10.pdf</span>\nPage 103:   <span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">GRU</span> [Learning phrase representations using rnn\nPage 104:    - Common to use LSTM or <span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">GRU</span>: their additive interactions\n\n<span class=\"ansi35\">slides/2018/cs231n_2018_ds08.pdf</span>\nPage 3: ●   CNNs, GANs, RNNs, LSTMs, <span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">GRU</span>\nPage 35: ● Temporal aggregation: 1) temporal pooling 2) RNN (e.g. LSTM, <span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">GRU</span>)\nPage 37: ● Temporal aggregation: 1) temporal pooling 2) RNN (e.g. LSTM, <span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">GRU</span>)\n\n<span class=\"ansi35\">slides/2018/cs231n_2018_lecture10.pdf</span>\nPage 105:   <span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">GRU</span> [Learning phrase representations using rnn\nPage 106:    - Common to use LSTM or <span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">GRU</span>: their additive interactions\n\n<span class=\"ansi35\">slides/2019/cs231n_2019_lecture10.pdf</span>\nPage 103:   <span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">GRU</span> [Learning phrase representations using rnn\nPage 105:    - Common to use LSTM or <span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">GRU</span>: their additive interactions\n\n</pre>\n\nand it will recursively find a regex in pdfs and pptx slides, including if some of them are zipped up.\n\nYou can do mostly the same thing with [`pdfgrep -r`][pdfgrep], but you will miss content in other file types and it will be much slower:\n\n```barchart\ntitle: Searching in 65 pdfs with 93 slides each\nseries: run time (seconds, lower is better)\ndata:\n   pdfgrep: 30.97\n   rga (first run): 9.91\n   rga (subsequent runs): 0.156\n```\n\nOn the first run rga is mostly faster because of multithreading, but on subsequent runs (with the same files but any regex query) rga will cache the text extraction, so it becomes almost as fast as searching in plain text files.\n\n### Other files\n\nrga will recursively descend into archives and match text in every file type it knows.\n\nHere is an example directory with different file types:\n\n```\ndemo\n├── greeting.mkv\n├── hello.odt\n├── hello.sqlite3\n└── somearchive.zip\n    ├── dir\n    │   ├── greeting.docx\n    │   └── inner.tar.gz\n    │       └── greeting.pdf\n    └── greeting.epub\n```\n\n(see the actual directory [here](https://github.com/phiresky/ripgrep-all/tree/master/exampledir/demo))\n\n<pre class=\"ansi2html language-none\">$ rga \"hello\" demo/\n\n<span class=\"ansi35\">demo/greeting.mkv</span>\nmetadata: chapters.chapter.0.tags.title=\"Chapter 1: <span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">Hello</span>\"\n00:08.398 --&gt; 00:11.758: <span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">Hello</span> from a movie!\n\n<span class=\"ansi35\">demo/hello.odt</span>\n<span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">Hello</span> from an OpenDocument file!\n\n<span class=\"ansi35\">demo/hello.sqlite3</span>\ntbl: greeting='<span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">hello</span>', from='sqlite database!'\n\n<span class=\"ansi35\">demo/somearchive.zip</span>\ndir/greeting.docx: <span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">Hello</span> from a MS Office document!\ndir/inner.tar.gz: greeting.pdf: Page 1: <span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">Hello</span> from a PDF!\ngreeting.epub: <span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">Hello</span> from an E-Book!\n</pre>\n\nIt can even search jpg / png images and scanned pdfs using OCR, though this is disabled by default since it is not useful that often and very slow.\n\n<pre class=\"ansi2html language-none\">$ # find screenshots of crates.io\n~$ rga --rga-adapters=+pdfpages,tesseract crates ~/screenshots\n<span class=\"ansi35\">/home/tehdog/Bilder/screenshots/2019-06-14-19-01-10.png</span>\n<span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">crates</span>.io I Browse All <span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">Crates</span>  Docs v\nDocumentation Repository Dependent <span class=\"ansi1\"></span><span class=\"ansi1 ansi31\">crates</span>\n\n~$ # there it is!\n</pre>\n\n## Setup\n\nrga should compile with stable Rust. To install it, simply run (your OSes equivalent of)\n\n```bash\n~$ apt install build-essential pandoc poppler-utils ffmpeg\n~$ cargo install ripgrep-all\n\n~$ rga --help # works! :)\n```\n\nYou don't necessarily need to install any dependencies, but then you will see an error when trying to read from the corresponding file type (e.g. poppler-utils for pdf).\n\n## Technical details\n\nThe code and a few more details are here: <https://github.com/phiresky/ripgrep-all>\n\n`rga` simply runs ripgrep (`rg`) with some options set, especially `--pre=rga-preproc` and `--pre-glob`.\n\n`rga-preproc [fname]` will match an \"adapter\" to the given file based on either it's filename or it's mime type (if `--accurate` is given). You can see all adapters currently included in [src/adapters](src/adapters).\n\nSome rga adapters run external binaries to do the actual work (such as pandoc or ffmpeg), usually by writing to stdin and reading from stdout. Others use a Rust library or bindings to achieve the same effect (like sqlite or zip).\n\nTo read archives, the `zip` and `tar` libraries are used, which work fully in a streaming fashion - this means that the RAM usage is low and no data is ever actually extracted to disk!\n\nMost adapters read the files from a [Read](https://doc.rust-lang.org/std/io/trait.Read.html), so they work completely on streamed data (that can come from anywhere including within nested archives).\n\nDuring the extraction, rga-preproc will compress the data with ZSTD to a memory cache while simultaneously writing it uncompressed to stdout. After completion, if the memory cache is smaller than 2MByte, it is written to a [rkv](https://docs.rs/rkv/0.9.6/rkv/) cache\n\n## Development\n\nTo enable debug logging:\n\n```bash\nexport RUST_LOG=debug\nexport RUST_BACKTRACE=1\n```\n\nAlso rember to disable caching with `--rga-no-cache` or clear the cache in `~/.cache/rga` to debug the adapters.\n\n## Future Work\n\n-   I wanted to add a photograph adapter (based on object classification / detection) for fun, so you can grep for \"mountain\" and it will show pictures of mountains, like in Google Photos. It worked with [YOLO](https://pjreddie.com/darknet/yolo/), but something more useful and state-of-the art [like this](https://github.com/aimagelab/show-control-and-tell) proved very hard to integrate.\n-   7z adapter (couldn't find a nice to use Rust library with streaming)\n-   allow per-adapter configuration options (probably via env (RGA_ADAPTERXYZ_CONF=json))\n-   maybe use a different disk kv-store as a cache instead of rkv, because I had some [weird problems](src/preproc_cache.rs#30) with that. SQLite is great. All other Rust alternatives I could find don't allow writing from multiple processes.\n-   there's some more (mostly technical) todos in the code I don't know how to fix\n\n## Similar tools\n\n-   [pdfgrep][pdfgrep]\n-   [this gist](https://gist.github.com/phiresky/5025490526ba70663ab3b8af6c40a8db) has my proof of concept version of a caching extractor to use ripgrep as a replacement for pdfgrep.\n-   [this gist](https://gist.github.com/ColonolBuendia/314826e37ec35c616d70506c38dc65aa) is a more extensive preprocessing script by [@ColonolBuendia](https://github.com/ColonolBuendia)\n\n[pdfgrep]: https://pdfgrep.org/\n[ripgrep]: https://github.com/BurntSushi/ripgrep\n"};

/***/ })

})
//# sourceMappingURL=post.js.ad0718440f813e328406.hot-update.js.map