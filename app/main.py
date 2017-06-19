from flask import Flask, render_template
import boto3
from bson import json_util
import json

#Changing jinja templating syntax so that Flask is not confused with angular syntax 
class CustomFlask(Flask):
    jinja_options = Flask.jinja_options.copy()
    jinja_options.update(dict(
        block_start_string='<%',
        block_end_string='%>',
        variable_start_string='%%',
        variable_end_string='%%',
        comment_start_string='<#',
        comment_end_string='#>',
    ))

def create_app():
    app = CustomFlask(__name__)

    return app

app = create_app()

@app.route('/')
def hello_world():
    return render_template("index.html")

@app.route('/api/accessKey/<accessKey>/secretKey/<secretKey>')
def aws_api(accessKey, secretKey):
    client = boto3.client('ec2',
                          aws_access_key_id=accessKey,
                          aws_secret_access_key=secretKey,
                          region_name='us-east-1')
    response = client.describe_instances()
    return json.dumps(response['Reservations'], default=json_util.default)

if __name__ == '__main__':
    app.run(debug=True)
