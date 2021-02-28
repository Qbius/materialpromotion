from http.server import BaseHTTPRequestHandler
from urllib.parse import parse_qs
from urllib.request import urlopen
from json import loads, dumps

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        parameters = parse_qs(self.path[2:])
        error = ''

        if 'ids' not in parameters:
            error = 'Required parameter "ids" not found'
        elif not all(idpack.replace(',', '').isdigit() for idpack in parameters['ids']):
            error = '"ids" must be a list of numbers'

        if error:
            self.send_response(400)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(error)
        else:
            payload = loads(urlopen('https://api.guildwars2.com/v2/commerce/prices?ids=' + ','.join(parameters['ids'])).read())
            info = {priceinfo['id']: (priceinfo['buys']['unit_price'], priceinfo['sells']['unit_price']) for priceinfo in payload}

            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(dumps(info))