# -*- coding: utf-8 -*-
"""
Created on Sun Aug 28 16:43:34 2016

@author: stefan
"""

from flask import Flask
from flask import request
import pandas as pd
import json
from sklearn.neighbors import BallTree
from sklearn import preprocessing
from flask.ext.cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

winger = ['AM(R)','AM(L)','F(R)','F(L)','M(R)','M(L)']
gf = ['AM(R)','AM(L)','AM(C)','F(R)','F(L)','F(C)']
target = ['F(C)']
dlf = ['AM(R)','AM(L)','AM(C)','F(R)','F(L)','F(C)']
aplay = ['AM(R)','AM(L)','AM(C)']
play = ['M(C)','AM(C)']
stopper = ['D(C)']
bwm = ['DM(C)','M(C)']
btb = ['DM(C)','M(C)','AM(C)','M(R)','M(L)']
gm = ['M(C)']
wf = ['AM(R)','AM(L)','F(R)','F(L)','F(C)']
fb = ['D(R)','D(L)','D(C)','DM(R)','DM(L)']
bpd = ['D(R)','D(L)','D(C)']
dlp = ['DM(C)','M(C)']
wb = ['D(R)','D(L)','DM(R)','DM(L)','M(R)','M(L)']
gd = ['D(R)','D(L)','D(C)']
finisher = ['F(C)']
wm = ['M(R)','M(L)','DM(R)','DM(L)']
keeper = ['GK']


k=4
def calculateKNN():
    df1 = pd.read_csv(r'/home/stefan/novi22.csv', encoding = "utf_8")
    df = pd.read_csv(r'/home/stefan/novi22.csv', encoding = "utf_8")
    df = df.drop('clubs', 1)
    df = df.drop('clubs-href', 1)
    df = df.drop('players', 1)
    df = df.drop('players-href', 1)
    df = df.drop('full name', 1)
    df = df.drop('date of birth', 1)
    df = df.drop('image-src', 1)
    df = df.drop('position desc', 1)
    df = df.drop('nation', 1)
    df = df.drop('id', 1)
    X = preprocessing.MinMaxScaler().fit_transform(df.as_matrix())
    
    X[:,0:1] *= 7 # weight,height 2
    X[:,2] *= 10 # rating 10
    X[:,3] *= 2 # age 2
    X[:,4:36] *= 4 # karakteristike 3
    X[:,37:52] *= 5 # pozicije 3
    
    ballTree = BallTree(X, leaf_size=40, metric='euclidean')
    distances, indices = ballTree.query(X, k=k)
    return indices, df1

indices, df1 = calculateKNN()

@app.route('/players/<id>')
@cross_origin()
def get_player(id):
    player_json = df1.iloc[int(id)].to_json()
    python_obj = json.loads(player_json)
    ar = indices[int(id)]
    python_obj["list"] = [] 
    for i in range(1,len(ar)):
        python_obj["list"].append(json.loads(df1.iloc[ar[i]].to_json()))
    response = json.dumps(python_obj)
    return response
    
    
@app.route('/clubs')
@cross_origin()
def get_clubs():
    response = json.dumps(sorted(df1.clubs.unique().tolist()))
    return response
    
@app.route('/nations')
@cross_origin()
def get_nations():
    response = json.dumps(sorted(df1.nation.unique().tolist()))
    return response
    
@app.route('/positions')
@cross_origin()
def get_positions():
#    positions = ["GK","D(R)",
#    "D(L)",
#    "D(C)",
#    "DM(R)",
#    "DM(L)",
#    "DM(C)",
#    "M(R)",
#    "M(L)",
#    "M(C)",
#    "AM(R)",
#    "AM(L)",
#    "AM(C)",
#    "F(R)",
#    "F(L)",
#    "F(C)"]
    response = json.dumps([x for x in df1['position desc'].unique().tolist() if str(x) != 'nan'])
    return response
    
@app.route('/attributes')
@cross_origin()
def get_atributes():
    attr = ["Aerial Ability",
        "Aggression",
        "Command of Area",
        "Composure",
        "Concentration",
        "Control",
        "Corners",
        "Creativity",
        "Crossing",
        "Determination",
        "Distribution",
        "Dribbling",
        "Finishing",
        "Flair",
        "Free Kicks",
        "Handling",
        "Leadership",
        "Long Passing",
        "Long Shots",
        "Marking",
        "Movement",
        "One on Ones",
        "Pace",
        "Passing",
        "Penalties",
        "Positioning",
        "Saving Penalties",
        "Shot Stopping",
        "Stamina",
        "Strength",
        "Tackling",
        "Volleying",
        "Work Rate"]
    response = json.dumps(attr)
    return response    

@app.route('/players', methods=['POST'])
def add_player_post():
    global indices
    global df1
    global indices        
    json_data = request.get_json()
    json_data["id"]=len(df1)
    
    if json_data['position desc'] == 'Winger':
        for p in winger:
            json_data[p]=json_data[p]*3
    elif json_data['position desc'] == 'General Forward':
        for p in gf:
            json_data[p]=json_data[p]*3        
    elif json_data['position desc'] == 'Target Man':
        for p in target:
            json_data[p]=json_data[p]*3
    elif json_data['position desc'] == 'Deep-Lying Forward':
         for p in dlf:
            json_data[p]=json_data[p]*3       
    elif json_data['position desc'] == 'Keeper':
         for p in keeper:
            json_data[p]=json_data[p]*3
    elif json_data['position desc'] == 'Advanced Playmaker':
         for p in aplay:
            json_data[p]=json_data[p]*3
    elif json_data['position desc'] == 'Playmaker':
         for p in play:
            json_data[p]=json_data[p]*3
    elif json_data['position desc'] == 'Stopper':
         for p in stopper:
            json_data[p]=json_data[p]*3       
    elif json_data['position desc'] == 'Ball-Winning Midfielder':
         for p in bwm:
            json_data[p]=json_data[p]*3
    elif json_data['position desc'] == 'Box-To-Box Midfielder':
         for p in btb:
            json_data[p]=json_data[p]*3
    elif json_data['position desc'] == 'General Midfielder':
         for p in gm:
            json_data[p]=json_data[p]*3
    elif json_data['position desc'] == 'Wide Forward':
         for p in wf:
            json_data[p]=json_data[p]*3
    elif json_data['position desc'] == 'Fullback':
         for p in fb:
            json_data[p]=json_data[p]*3
    elif json_data['position desc'] == 'Ball-Playing Defender':
         for p in bpd:
            json_data[p]=json_data[p]*3
    elif json_data['position desc'] == 'Deep-Lying Playmaker':
         for p in dlp:
            json_data[p]=json_data[p]*3       
    elif json_data['position desc'] == 'Wingback':
         for p in wb:
            json_data[p]=json_data[p]*3
    elif json_data['position desc'] == 'General Defender':
         for p in gd:
            json_data[p]=json_data[p]*3
    elif json_data['position desc'] == 'Finisher':
         for p in finisher:
            json_data[p]=json_data[p]*3
    elif json_data['position desc'] == 'Wide Midfielder':
         for p in wm:
            json_data[p]=json_data[p]*3    
    
    
    
    
    print(json_data)
    df1.loc[len(df1)]=json_data
    df1.to_csv('novi22.csv', sep=',', index = False)
    indices, df1 = calculateKNN()
    return "OK"  

@app.route('/clubs/<name>/players')
def get_players_for_club(name):
    response = df1[df1['clubs']==name].to_json(orient='records')
    return response

if __name__ == "__main__":
    app.run(host="0.0.0.0", threaded=True)