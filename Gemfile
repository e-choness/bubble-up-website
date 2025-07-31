source "https://rubygems.org"

gem "jekyll", "~> 4.3.0"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  gem "jekyll-paginate"
  gem "jekyll-sass-converter"
end

# Add csv gem to silence Ruby 3.4.0 warning
gem "csv"

# Add logger gem to silence Ruby 3.5.0 warning
gem "logger"

# Add base64 gem to silence Ruby 3.5.0 warning
gem "base64"


platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.2.0", :platforms => [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]