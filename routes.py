from flask import app, Flask, redirect, url_for, request, render_template, flash

app = Flask(__name__)

@app.route('/')
def default():
    return render_template('base.html')

@app.route('/main')
def main():
    return render_template('welcome.html')
 
@app.route('/kingdom-1')
def kingdom():
    return render_template('kingdom-1.html')
 
@app.route('/kingdom-1copy')
def kingdomcopy():
    return render_template('kingdom-1 copy.html') 
 
@app.route('/kingdom-2')
def kingdom2():
    return render_template('kingdom-2.html')
 
@app.route('/kingdom-3')
def kingdom3():
    return render_template('kingdom-3.html')
 
@app.route('/kingdom-4')
def kingdom4():
    return render_template('kingdom-4.html')


if __name__ == '__main__':
    app.run(debug=True)

