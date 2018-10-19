# Similar GIS objects viewer

File spec
-----------

Each GeoJson feature must contain properties:

* `id` - unique feature id
* `similarity_objects` - list of similar objects

```
"properties": {
  "id": "0", 
  "similarity_objects": [
    {"id": "5", "similarity": 0.9482482530233113}, 
    {"id": "1081", "similarity": 0.9309044421719751}, 
    {"id": "4040", "similarity": 0.9272754988083252}, 
    ...
  ]
}
```