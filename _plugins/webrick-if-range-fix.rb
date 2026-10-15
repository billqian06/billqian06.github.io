# Local preview fix for `jekyll serve`; it has no effect on the built site.
#
# WEBrick answers a Range request whose If-Range validator still matches with
# "304 Not Modified" and an empty body, instead of the requested bytes. Chrome
# resumes and seeks large videos with exactly that request, so they fail to play
# locally (PIPELINE_ERROR_READ). As HTTP specifies, send the range when If-Range
# matches and the whole file when it doesn't.
require 'webrick'

module WebrickIfRangeFix
  def not_modified?(req, res, mtime, etag)
    if (if_range = req['if-range'])
      unchanged =
        begin
          Time.httpdate(if_range).to_i >= mtime.to_i
        rescue ArgumentError
          WEBrick::HTTPUtils.split_header_value(if_range).member?(etag)
        end
      req.header.delete('if-range')
      req.header.delete('range') unless unchanged
    end
    super
  end
end

WEBrick::HTTPServlet::DefaultFileHandler.prepend(WebrickIfRangeFix)
