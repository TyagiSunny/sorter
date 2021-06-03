import React,{Component} from 'react';
import "../App.css";
import { mergeSort,quickSort,bubbleSort,insertionSort } from '../SortingAlgorithms/SortingAlgorithms';
import './SortingVisualizer.css';

export default class SortingVisualizer extends Component{

    constructor(props){
        super(props);
        this.state={
            array:[],
            message:"",
            showMessage:false
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array1=[];
        let n=window.screen.width*window.devicePixelRatio/8;
        for(let i=0;i<n;i++){
            array1.push(randomIntFromInterval(5,500));
        }
        this.setState({array:array1});
    }

    mergeSort(){
        // let arr1=this.state.array.slice().sort((a,b)=>a-b);
        // let arr2=mergeSort([...this.state.array]);

        // console.log(isArrayEqual(arr1,arr2));
        if(this.state.message===""){
            this.setState({message:"MergeSort is already running. please wait...."});
            const animations=mergeSort([...this.state.array]);
            let n=animations.length;
            for(let i=0;i<animations.length;i++){
                let isColorChange=i%3!==2;
                let arrayBars=document.getElementsByClassName('array-bar');
                if(isColorChange){
                    let [barOne,barTwo]=animations[i];
                    let barOneStyle=arrayBars[barOne].style;
                    let barTwoStyle=arrayBars[barTwo].style;
                    const color=i%3===0?'red':'#007acc';
                    setTimeout(() => {
                        barOneStyle.backgroundColor=color;
                        barTwoStyle.backgroundColor=color;
                        if(i===n-1){
                            this.setState({message:""});
                            this.setState({showMessage:false});
                        }
                    }, i*5);
                }else{
                    setTimeout(() => {
                        let [barIndex,newBarHeight]=animations[i];
                        let barStyle=arrayBars[barIndex].style;
                        barStyle.height=`${newBarHeight}px`;
                        if(i===n-1){
                            this.setState({message:""});
                            this.setState({showMessage:false});
                        }
                    }, i*5);
                }
                

            }
            
        }else{
            this.setState({showMessage:true});
        }

    }

    quickSort(){
        // let arr1=this.state.array.slice().sort((a,b)=>a-b);
        // let arr2=quickSort([...this.state.array]);

        // console.log(isArrayEqual(arr1,arr2));
        if(this.state.message===""){
            this.setState({message:"quickSort is already running. please wait...."})

            const animations=quickSort([...this.state.array]);
            for(let i=0;i<animations.length;i++){

                let arrayBars=document.getElementsByClassName('array-bar');
                let [color,barOne,barTwo]=animations[i];
                let barOneStyle=arrayBars[barOne].style;
                let barTwoStyle=arrayBars[barTwo].style;

                let isColorChange=color!=='none';
                
                
                if(isColorChange){
                    
                    // const color=i%3===0?'red':'#007acc';
                    setTimeout(() => {
                        barOneStyle.backgroundColor=color;
                        barTwoStyle.backgroundColor=color;
                        if(i===animations.length-1){
                            this.setState({message:""});
                            this.setState({showMessage:false});
                        }
                    }, i*5);
                }else{
                    setTimeout(() => {
                        
                        
                        let tmp=barOneStyle.height;
                        barOneStyle.height=barTwoStyle.height;
                        barTwoStyle.height=tmp;
                        if(i===animations.length-1){
                            this.setState({message:""});
                            this.setState({showMessage:false});
                        }
                        // barStyle.height=`${newBarHeight}px`;
                    }, i*5);
                }

            }

        }else{
            this.setState({showMessage:true});
        }
    }

    bubbleSort(){
        // let arr1=this.state.array.slice().sort((a,b)=>a-b);
        // let arr2=bubbleSort([...this.state.array]);

        // console.log(isArrayEqual(arr1,arr2));
        if(this.state.message===""){
            this.setState({message:"bubbleSort is already running. please wait...."})

            const animations=bubbleSort([...this.state.array]);
            console.log(animations);
            for(let i=0;i<animations.length;i++){

                let arrayBars=document.getElementsByClassName('array-bar');
                let [color,barOne,barTwo]=animations[i];
                let barOneStyle=arrayBars[barOne].style;
                let barTwoStyle=arrayBars[barTwo].style;

                let isColorChange=color!=='none';
                
                
                if(isColorChange){
                    
                    // const color=i%3===0?'red':'#007acc';
                    setTimeout(() => {
                        barOneStyle.backgroundColor=color;
                        barTwoStyle.backgroundColor=color;
                        if(i===animations.length-1){
                            this.setState({message:""});
                            this.setState({showMessage:false});
                        }
                    }, i*1);
                }else{
                    setTimeout(() => {
                        
                        
                        let tmp=barOneStyle.height;
                        barOneStyle.height=barTwoStyle.height;
                        barTwoStyle.height=tmp;
                        if(i===animations.length-1){
                            this.setState({message:""});
                            this.setState({showMessage:false});
                        }
                        // barStyle.height=`${newBarHeight}px`;
                    }, i*1);
                }

            }
        }else{
            this.setState({showMessage:true});
        }
    }

    insertionSort(){

        // let arr1=this.state.array.slice().sort((a,b)=>a-b);
        // let arr2=insertionSort([...this.state.array]);

        // console.log(isArrayEqual(arr1,arr2));

        if(this.state.message===""){
            this.setState({message:"insertionSort is already running. please wait...."})

            const animations=insertionSort([...this.state.array]);
            for(let i=0;i<animations.length;i++){
                let arrayBars=document.getElementsByClassName('array-bar');
                let [color,barOne,barTwo]=animations[i];
                

                let isColorChange=color!=='none';
                
                
                if(isColorChange){
                    let barOneStyle=arrayBars[barOne].style;
                    let barTwoStyle=arrayBars[barTwo].style;
                    // const color=i%3===0?'red':'#007acc';
                    setTimeout(() => {
                        barOneStyle.backgroundColor=color;
                        barTwoStyle.backgroundColor=color;
                        if(i===animations.length-1){
                            this.setState({message:""});
                            this.setState({showMessage:false});
                        }
                    }, i*1);
                }else{
                    setTimeout(() => {
                        // let barStyle=arrayBars[barOne].style;
                        // let [barIndex,newBarHeight]=animations[i];
                        let barStyle=arrayBars[barOne].style;
                        barStyle.height=`${barTwo}px`;
                        if(i===animations.length-1){
                            this.setState({message:""});
                            this.setState({showMessage:false});
                        }
                    }, i*1);
                }

            }

        }else{
            this.setState({showMessage:true});
        }

        
    }



    render(){
        const {array}=this.state;
        // console.log("r",array);
        return(
            <div>
                <div>
                    <div className="header">
                        Sorting Visualiser
                    </div>
                    <div className="message">
                        {this.state.showMessage?this.state.message:""}
                    </div>
                </div>
                <div className="array-container">
                
                    {array.map((val,indx)=>(
                        <div className="array-bar" style={{height:`${val}px`}} key={indx}>
                        </div>
                    ))}
                    
                </div>

                <div className="">
                    <button className="buttons" onClick={()=>this.resetArray()} style={{marginTop:'5px'}}>Generate New Array</button>
                    <button className="buttons" onClick={()=>this.quickSort()} style={{marginTop:'5px'}}>Quick Sort</button>
                    <button className="buttons" onClick={()=>this.mergeSort()} style={{marginTop:'5px'}}>Merge Sort</button>
                    <button className="buttons" onClick={()=>this.bubbleSort()} style={{marginTop:'5px'}}>Bubble Sort</button>
                    <button className="buttons" onClick={()=>this.insertionSort()} style={{marginTop:'5px'}}>Insertion Sort</button>
                </div>
            </div>
            
            
        );
    }
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function isArrayEqual(left,right) {
    if(left.length!==right.length) return false
    let i=0
    while(i<left.length){
        if(left[i]!==right[i]) return false
        i++
    }
    return true;
}