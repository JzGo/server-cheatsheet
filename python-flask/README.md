# Flask

This one was pretty different for me. I've always wanted to get started in Python web application so I found this exercise pretty fascinating.

Assuming you have Python and virtualenv set up, you want to get into your project folder. And before you start anything, you want to start up a virtualenv instance.

```bash
. venv/bin/activate
```

Once it's started (you'll know because your prompt will have '(venv)' at the beginning), you're able to install Flask strictly within the project and within the environment instance.

```bash
pip install flask
```

Once it's installed, you can start setting up your server.

**server.py**

```python
from flask import Flask
app = Flask(__name__)
```

This imports the Flask library and sets up an instance of it called app. At that point you can create a route response on that app instance.

```python
@app.route('/')
def hello_world():
    return 'Greetings Earthlings'
```

Now, in order for the `flask` command to know what app it should run, you want to export the file into an environment variable called `FLASK_APP`:

```bash
export FLASK_APP=server.py
```

Finally, you can tell Flask to run the file:

```bash
flask run
```

Visit localhost at port 5000 and be amazed!

Note: To catch a glimpse what venv does for you, go ahead and deactivate it by typing `deactivate` in the terminal and hitting enter. Once you're out, try your flask run command. You'll find that Flask doesn't exist outside of that venv environment. Pretty cool!
