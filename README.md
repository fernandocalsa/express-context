# Example of Express app with context

## Authentication

Every request to this API requires a `Authorization` header. This is a simple `base64` string built from a JSON object like this:
```
{"userId":1}
```
