import React from 'react'

const config = {
  component_size: 25,
}
const textos = {
	textAlign: "center",
	fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
    fontSize: '40px',
    color: 'blue', 
    fontWeight: '700'
}

var newmaze;
	var maze;
	var xhttp = new XMLHttpRequest();
export default class App extends React.Component{
	
	constructor(props) {
		super(props)
		
			this.state = {
	  laberinto : [["+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+"],
										 ["|", "p", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|"],
										 ["+", "-", "-", "+", " ", " ", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+", " ", " ", "+", " ", " ", "+", "-", "-", "+", "-", "-", "+", " ", " ", "+"],
										 ["|", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " ", "|", " ", " ", "|"],
										 ["+", " ", " ", "+", "-", "-", "+", " ", " ", "+", " ", " ", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+", " ", " ", "+", "-", "-", "+", " ", " ", "+"],
										 ["|", " ", " ", " ", " ", " ", "|", " ", " ", "|", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|"],
										 ["+", " ", " ", "+", " ", " ", "+", " ", " ", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+"],
										 ["|", " ", " ", "|", " ", " ", "|", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|"],
										 ["+", " ", " ", "+", " ", " ", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+", " ", " ", "+", " ", " ", "+", "-", "-", "+", "-", "-", "+", " ", " ", "+"],
										 ["|", " ", " ", "|", " ", " ", "|", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " ", "|"],
										 ["+", " ", " ", "+", " ", " ", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+", " ", " ", "+", "-", "-", "+", "-", "-", "+", " ", " ", "+", " ", " ", "+"],
										 ["|", " ", " ", "|", " ", " ", "|", " ", " ", " ", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " ", "|", " ", " ", "|"],
										 ["+", " ", " ", "+", " ", " ", "+", " ", " ", "+", "-", "-", "+", " ", " ", "+", "-", "-", "+", " ", " ", "+", " ", " ", "+", "-", "-", "+", " ", " ", "+"],
										 ["|", " ", " ", "|", " ", " ", " ", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " ", "|"],
										 ["+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+", " ", " ", "+", "-", "-", "+", "-", "-", "+", " ", " ", "+", "-", "-", "+"],
										 ["|", " ", " ", " ", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " ", "|", " ", " ", "|", " ", " ", "|"],
										 ["+", " ", " ", "+", "-", "-", "+", " ", " ", "+", " ", " ", "+", "-", "-", "+", "-", "-", "+", " ", " ", "+", "-", "-", "+", " ", " ", "+", " ", " ", "+"],
										 ["|", " ", " ", "|", " ", " ", "|", " ", " ", "|", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " ", " ", " ", " ", "|", " ", " ", "|", " ", " ", "|"],
										 ["+", " ", " ", "+", " ", " ", "+", "-", "-", "+", "-", "-", "+", " ", " ", "+", " ", " ", "+", "-", "-", "+", " ", " ", "+", " ", " ", "+", " ", " ", "+"],
										 ["|", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " ", " ", " ", "g", "|"],
										 ["+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+"]],

    posi : 0,
    posj : 0
    }
		
		
	xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) {
		newmaze = JSON.parse(xhttp.responseText);
		for(var z=0;z<newmaze.length;z++){
			for(var x=0;x<newmaze[z].length;x++){
				this.state.laberinto[z][x]=newmaze[z][x];
			}
	}
	}
	};
	xhttp.open("GET", "http://52.88.26.79:7000/?type=json&w=10&h=10", true);
	xhttp.send();
		
	
	}
	renderDisplay() {
		this.state = {}
	}
	
	
  checkWin(){
    if((this.state.laberinto[this.state.posj][this.state.posi+1] === "g") ||
       (this.state.laberinto[this.state.posj][this.state.posi-1] === "g") ||
       (this.state.laberinto[this.state.posj+1][this.state.posi] === "g") ||
       (this.state.laberinto[this.state.posj-1][this.state.posi] === "g"))
    {
      alert("Salvaste a peach!!");
      window.location.reload();
    }
  }

  handleKeyDown(e){
    if (e.key === "ArrowRight"){
      if(this.state.laberinto[this.state.posj][this.state.posi+1] === " "){
        this.state.laberinto[this.state.posj][this.state.posi+1] = "p"
        this.state.laberinto[this.state.posj][this.state.posi] = " "
        this.setState({
            posi:this.state.posi+1
          })
      }
    }
    if (e.key === "ArrowLeft"){
      if(this.state.laberinto[this.state.posj][this.state.posi-1] === " "){
        this.state.laberinto[this.state.posj][this.state.posi-1] = "p"
        this.state.laberinto[this.state.posj][this.state.posi] = " "
        this.setState({
            posi:this.state.posi-1
        })
      }
    }
    if (e.key === "ArrowDown"){
      if(this.state.laberinto[this.state.posj+1][this.state.posi] === " "){
        this.state.laberinto[this.state.posj+1][this.state.posi] = "p"
        this.state.laberinto[this.state.posj][this.state.posi] = " "
        this.setState({
            posj:this.state.posj+1
        })
      }
    }
    if (e.key === "ArrowUp"){
      if(this.state.laberinto[this.state.posj-1][this.state.posi] === " "){
        this.state.laberinto[this.state.posj-1][this.state.posi] = "p"
        this.state.laberinto[this.state.posj][this.state.posi] = " "
        this.setState({
            posj:this.state.posj-1
        })
      }
    }
    this.checkWin();
  }

	render() {
		
		
		let pared = []
		for(let j=0; j<21;j++)
		{
			for(let i=0; i<31;i++)
			{
        switch(this.state.laberinto[j][i])
        {
        case '-':
          pared.push(<Paredes bg = 'black' cnt = '-' url = 'wall.PNG'/>)
        break;
        case '|':
          pared.push(<Paredes bg = 'black' cnt = '|' url = 'wall.PNG'/>)
        break;
        case '+':
          pared.push(<Paredes bg = 'black' cnt = '+' url = 'wall.PNG'/>)
        break;
        case 'p':
          pared.push(<Paredes bg = 'blue' cnt = 'p' url = 'toad.PNG'/>)
          this.state.posi = i
          this.state.posj = j
        break;
        case 'g':
          pared.push(<Paredes bg = 'red' cnt = 'g'  url = 'goal.PNG'/>)
        break;
        default:
          pared.push(<Paredes bg = 'green' cnt = ' '  url = ''/>)
        break;
        }
			}
		}
		return (
      <div>
        <h1 style = {textos}>EL LABERINTO DE SANTIAGO</h1>
        <h2 style = {textos}>Salva a Peach!!</h2>


      <div style={{display:"grid", gridTemplateColumns: "25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px", gridTemplateRows: "25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px" }}
           onKeyDown = { this.handleKeyDown.bind(this)}
           tabIndex = "0">
           {pared}
     </div>
     </div>
		);
	}
}
class Paredes extends React.Component{
	render(){
	const style = {
		 width: config.component_size,
		 height: config.component_size,
     backgroundColor: this.props.bg,
     c: this.props.cnt,
     backgroundImage: 'url(' + this.props.url + ')'
	 }
	 return <div style={style}> </div>
	}
}
