import React,{Component} from 'react';
import "../App.css";
import { mergeSort,quickSort,bubbleSort,insertionSort } from '../Algorithms/Algorithms';
import './Sorter.css';

function getRandomNumber(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default class Sorter extends Component{

    constructor(props){
        super(props);
        this.state={
            array:[],
            message:"",
            showMessage:false
        };
    }

    componentDidMount(){
        this.initializeArray();
    }

    initializeArray(){
        if(this.state.message===""){
            const array1=[];
            let n=window.screen.width/8;
            for(let i=0;i<n;i++){
                array1.push(getRandomNumber(5,500));
            }
            this.setState({array:array1});
        }else{
            this.setState({showMessage:true})
            
        }
    }

    mergeSort(){
        // let arr1=this.state.array.slice().sort((a,b)=>a-b);
        // let arr2=mergeSort([...this.state.array]);

        // console.log(isArrayEqual(arr1,arr2));
        if(this.state.message===""){
            this.setState({message:"MergeSort is already running. please wait...."});
            const totalStep=mergeSort([...this.state.array]);
            let n=totalStep.length;
            for(let i=0;i<totalStep.length;i++){
                let iscol=i%3!==2;
                let divNum=document.getElementsByClassName('array-bar');
                if(iscol){
                    let [FirstNumber,SecondNumber]=totalStep[i];
                    let FirstNumberStyle=divNum[FirstNumber].style;
                    let SecondNumberStyle=divNum[SecondNumber].style;
                    const color=i%3===0?'red':'#007acc';
                    setTimeout(() => {
                        FirstNumberStyle.backgroundColor=color;
                        SecondNumberStyle.backgroundColor=color;
                        if(i===n-1){
                            this.setState({message:""});
                            this.setState({showMessage:false});
                        }
                    }, i*5);
                }else{
                    setTimeout(() => {
                        let [barIndex,newBarHeight]=totalStep[i];
                        let barStyle=divNum[barIndex].style;
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
        let divNum=document.getElementsByClassName('array-bar');
        let height=[];
        for(let i=0;i<divNum.length;i++){
            height.push(parseInt(divNum[i].style.height.match(/(\d+)/)[0]));
        }
        let n=height.length;
        // console.log("sort",arraySortedOrNot(height,n));
        if(arraySortedOrNot(height,n)===0){ //Array is not sorted
            // this.setState({message:"Array is not sorted"});
            if(this.state.message===""){
                this.setState({message:"quickSort is already running. please wait...."})

                const totalStep=quickSort([...this.state.array]);
                for(let i=0;i<totalStep.length;i++){

                    let divNum=document.getElementsByClassName('array-bar');
                    let [color,FirstNumber,SecondNumber]=totalStep[i];
                    let FirstNumberStyle=divNum[FirstNumber].style;
                    let SecondNumberStyle=divNum[SecondNumber].style;

                    let iscol=color!=='none';
                    
                    
                    if(iscol){
                        
                        // const color=i%3===0?'red':'#007acc';
                        setTimeout(() => {
                            FirstNumberStyle.backgroundColor=color;
                            SecondNumberStyle.backgroundColor=color;
                            if(i===totalStep.length-1){
                                this.setState({message:""});
                                this.setState({showMessage:false});
                            }
                        }, i*5);
                    }else{
                        setTimeout(() => {
                            
                            
                            let tmp=FirstNumberStyle.height;
                            FirstNumberStyle.height=SecondNumberStyle.height;
                            SecondNumberStyle.height=tmp;
                            if(i===totalStep.length-1){
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
        }else{
            this.setState({showMessage:true,message:"Array is Already sorted, you can generate new array..."});
            setTimeout(() => {
                this.setState({showMessage:false,message:""})
            }, 2000);
        }
    }

    bubbleSort(){
        // let arr1=this.state.array.slice().sort((a,b)=>a-b);
        // let arr2=bubbleSort([...this.state.array]);

        // console.log(isArrayEqual(arr1,arr2));
        let divNum=document.getElementsByClassName('array-bar');
        let height=[];
        for(let i=0;i<divNum.length;i++){
            height.push(parseInt(divNum[i].style.height.match(/(\d+)/)[0]));
        }
        let n=height.length;
        // console.log("sort",arraySortedOrNot(height,n));
        if(arraySortedOrNot(height,n)===0){ //Array is not sorted
            // this.setState({message:"Array is not sorted"});
            if(this.state.message===""){
                this.setState({message:"bubbleSort is already running. please wait...."})
    
                const totalStep=bubbleSort([...this.state.array]);
                // console.log(totalStep);
                for(let i=0;i<totalStep.length;i++){
    
                    // let divNum=document.getElementsByClassName('array-bar');
                    let [color,FirstNumber,SecondNumber]=totalStep[i];
                    let FirstNumberStyle=divNum[FirstNumber].style;
                    let SecondNumberStyle=divNum[SecondNumber].style;
    
                    let iscol=color!=='none';
                    
                    
                    if(iscol){
                        
                        // const color=i%3===0?'red':'#007acc';
                        setTimeout(() => {
                            FirstNumberStyle.backgroundColor=color;
                            SecondNumberStyle.backgroundColor=color;
                            if(i===totalStep.length-1){
                                this.setState({message:""});
                                this.setState({showMessage:false});
                            }
                        }, i*1);
                    }else{
                        setTimeout(() => {
                            
                            
                            let tmp=FirstNumberStyle.height;
                            FirstNumberStyle.height=SecondNumberStyle.height;
                            SecondNumberStyle.height=tmp;
                            if(i===totalStep.length-1){
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
        }else{
            this.setState({showMessage:true,message:"Array is Already sorted, you can generate new array..."});
            setTimeout(() => {
                this.setState({showMessage:false,message:""})
            }, 2000);
        }
        // console.log("h",height);



        
    }

    insertionSort(){

        // let arr1=this.state.array.slice().sort((a,b)=>a-b);
        // let arr2=insertionSort([...this.state.array]);

        // console.log(isArrayEqual(arr1,arr2));

        if(this.state.message===""){
            this.setState({message:"insertionSort is already running. please wait...."})

            const totalStep=insertionSort([...this.state.array]);
            for(let i=0;i<totalStep.length;i++){
                let divNum=document.getElementsByClassName('array-bar');
                let [color,FirstNumber,SecondNumber]=totalStep[i];
                

                let iscol=color!=='none';
                
                
                if(iscol){
                    let FirstNumberStyle=divNum[FirstNumber].style;
                    let SecondNumberStyle=divNum[SecondNumber].style;
                    // const color=i%3===0?'red':'#007acc';
                    setTimeout(() => {
                        FirstNumberStyle.backgroundColor=color;
                        SecondNumberStyle.backgroundColor=color;
                        if(i===totalStep.length-1){
                            this.setState({message:""});
                            this.setState({showMessage:false});
                        }
                    }, i*1);
                }else{
                    setTimeout(() => {
                        // let barStyle=divNum[FirstNumber].style;
                        // let [barIndex,newBarHeight]=totalStep[i];
                        let barStyle=divNum[FirstNumber].style;
                        barStyle.height=`${SecondNumber}px`;
                        if(i===totalStep.length-1){
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
                        Sorter
                    </div>
                    <div className="message">
                        <span >by Sunny Tyagi</span>
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
                    <button className="buttons" onClick={()=>this.initializeArray()} style={{marginTop:'5px'}}>Generate New Array</button>
                    <button className="buttons" onClick={()=>this.quickSort()} style={{marginTop:'5px'}}>Quick Sort</button>
                    <button className="buttons" onClick={()=>this.mergeSort()} style={{marginTop:'5px'}}>Merge Sort</button>
                    <button className="buttons" onClick={()=>this.bubbleSort()} style={{marginTop:'5px'}}>Bubble Sort</button>
                    <button className="buttons" onClick={()=>this.insertionSort()} style={{marginTop:'5px'}}>Insertion Sort</button>
                </div>
            </div>
            
            
        );
    }
}



function arraySortedOrNot(arr, n)
{
     
    // Array has one or no element or the
    // rest are already checked and approved.
    if (n == 1 || n == 0)
        return 1;
 
    // Unsorted pair found (Equal values allowed)
    if (arr[n - 1] < arr[n - 2])
        return 0;
 
    // Last pair was sorted
    // Keep on checking
    return arraySortedOrNot(arr, n - 1);
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