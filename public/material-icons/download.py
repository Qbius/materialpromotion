from urllib.request import urlopen, urlretrieve
from json import loads

url = 'https://api.guildwars2.com/v2/items?ids=24272,24273,24274,24275,24276,24277,24278,24279,24280,24281,24282,24283,24284,24285,24286,24287,24288,24289,24290,24291,24292,24293,24294,24295,24296,24297,24298,24299,24363,24300,24346,24347,24348,24349,24350,24351,24352,24353,24354,24355,24356,24357,24342,24343,24344,24345,24341,24358'
payload = loads(urlopen(url).read())
[urlretrieve(item['icon'], item['name'].replace(' ', '_') + '.png') for item in payload]
print([item['name'] for item in payload])