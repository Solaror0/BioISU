from flask import app, Flask, redirect, url_for, request, render_template, flash

app = Flask(__name__)

@app.route('/')
def default():
    return render_template('welcome.html')

@app.route('/welcome-2')
def welcome2():
    return render_template('welcome-2.html')
 
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

 
@app.route('/cycle-1')
def cycle1():
    return render_template('cycle-1.html')

 
@app.route('/cycle-2')
def cycle2():
    return render_template('cycle-2.html')

@app.route('/cycle-3')
def cycle3():
    return render_template('cycle-3.html')

@app.route('/cycle-4')
def cycle4():
    return render_template('cycle-4.html')

@app.route('/cycle-5')
def cycle5():
    return render_template('cycle-5.html')

@app.route('/cycle-6')
def cycle6():
    return render_template('cycle-6.html')

@app.route('/cycle-7')
def cycle7():
    return render_template('cycle-7.html')

@app.route('/cycle-8')
def cycle8():
    return render_template('cycle-8.html')



@app.route('/popu-1')
def popu1():
    return render_template('popu-1.html')


@app.route('/popu-2')
def popu2():
    return render_template('popu-2.html')

@app.route('/comp-1')
def comp1():
    return render_template('comp-1.html')

@app.route('/comp-2')
def comp2():
    return render_template('comp-2.html')


@app.route('/comp-3')
def comp3():
    return render_template('comp-3.html')

@app.route('/comp-3p5')
def comp3p5():
    return render_template('comp-3p5.html')


@app.route('/comp-4')
def comp4():
    return render_template('comp-4.html')


@app.route('/comp-4p5')
def comp4p5():
    return render_template('comp-4p5.html')


@app.route('/finish')
def finish():
    return render_template('finish.html')

@app.route('/matchgame')
def matchgame():
    return render_template('matchgame.html')



if __name__ == '__main__':
    app.run(debug=True)

