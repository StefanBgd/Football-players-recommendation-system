# -*- coding: utf-8 -*-
"""
Created on Sun Aug  7 21:15:41 2016

@author: stefan
"""
import pandas as pd
import numpy as np
from sklearn.neighbors import NearestNeighbors
from sklearn.neighbors import BallTree
from sklearn import preprocessing

df = pd.read_csv(r'/home/stefan/Desktop/novi.csv', encoding = "ISO-8859-1")

df = df.drop('clubs', 1)
df = df.drop('clubs-href', 1)
df = df.drop('players', 1)
df = df.drop('players-href', 1)
df = df.drop('full name', 1)
df = df.drop('date of birth', 1)
df = df.drop('image-src', 1)
df = df.drop('position desc', 1)
df = df.drop('nation', 1)

    
X = preprocessing.MinMaxScaler().fit_transform(df.as_matrix())
#X = preprocessing.scale(df.as_matrix())

X[:,0:1] *= 2 # weight,height 2
X[:,2] *= 10 # rating 10
X[:,3] *= 2 # age 2
X[:,4:36] *= 3 # karakteristike 3
X[:,37:52] *= 5 # pozicije 3
#X[:,53:54] *= 0
#X[:,54] *= 0.5
ballTree = BallTree(X, leaf_size=40, metric='euclidean')
distances, indices = ballTree.query(X, k=2)
index = 1 #izaberi igraca po indeksu
ar = indices[index]

df2 = pd.read_csv(r'/home/stefan/Desktop/novi.csv', encoding = "ISO-8859-1")

for i in ar:
    #print(i)
    print(df2.iloc[i])
    #print(df2.iloc[i]['players'], df2.iloc[i]['rating'], df2.iloc[i]['age'])
    #print(df2.iloc[i]['position desc'])
    #print(X[i])
print(distances[index])
