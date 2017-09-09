//Enter domain of site to search.
var domain="http://www.knowithub.com"

var searchaction=[ //form action
"http://www.google.com/search"
]

var queryfieldname=["q"] //name of hidden query

function switchaction(cur, index){
cur.form.action=searchaction[index]
document.getElementById("hiddenquery").name=queryfieldname[index]
}

function kihsitesearch(curobj){

document.getElementById("hiddenquery").value="site:"+domain+" "+curobj.qfront.value
}