import React from 'react';

//InsertionSort

export const insertionSort=(arr)=>{

    let totalstep=[];
    
    let key,j;
    
    for(let i=1;i<arr.length;i++){
    
        key=arr[i];
    
        j=i-1;
    
        while(j>=0 && arr[j]>key){
    
            totalstep.push(['red',j+1,j])
    
            totalstep.push(['#007acc',j+1,j])
    
            totalstep.push(['none',j+1,arr[j]])
    
            arr[j+1]=arr[j];
    
            j--;
    
        }
    
        totalstep.push(['none',j+1,key])
    
        arr[j+1]=key;
    
    }
    
    return totalstep;
}

//BubbleSort

export const bubbleSort=(arr)=>{
    
    let totalstep=[];

    let isSwapped=false;
    
    for(let i=0;i<arr.length-1;i++){

        isSwapped=false;

        for(let j=0;j<arr.length-i-1;j++){

            totalstep.push(['red',j,j+1]);

            totalstep.push(['#007acc',j,j+1]);
            
            if(arr[j]>arr[j+1]){

                totalstep.push(['none',j,j+1]);

                swap(arr,j,j+1);

                isSwapped=true;

            }

        }

        if(!isSwapped) break;

    }
    return totalstep;
}

const swap=(arr,i,j)=>{

    arr[i]=arr[i]+arr[j];

    arr[j]=arr[i]-arr[j];

    arr[i]=arr[i]-arr[j];

}


// QuickSort

export const quickSort=(arr)=>{

    let totalstep=[];

    if(arr.length<=1) return arr;

    quickSortHelper(arr,0,arr.length-1,totalstep);

    return totalstep;

}

const quickSortHelper=(arr,low,high,totalstep)=>{

    if(low<high){

        let pi=partition(arr,low,high,totalstep);

        quickSortHelper(arr,low,pi-1,totalstep);

        quickSortHelper(arr,pi+1,high,totalstep);

    }

}

const partition=(arr,low,high,totalstep)=>{

    let pi=arr[high];

    let k=low-1;

    for(let i=low;i<=high;i++){

        totalstep.push(['red',i,high]);

        totalstep.push(['#007acc',i,high]);

        if(arr[i]<pi){

            k++;

            totalstep.push(['none',i,k]);

            let tmp=arr[i];

            arr[i]=arr[k];

            arr[k]=tmp;
            

        }

    }

    totalstep.push(['red',k+1,high]);

    totalstep.push(['#007acc',k+1,high]);

    totalstep.push(['none',k+1,high]);

    let tmp=arr[k+1];

    arr[k+1]=arr[high];

    arr[high]=tmp;

    return k+1;
}


//MergeSort

export const mergeSort=(arr)=>{

    const totalstep=[];

    if(arr.length<=1) return arr;

    const auxillaryArray=arr.slice();

    mergeSortHelper(arr,0,arr.length-1,auxillaryArray,totalstep);

    return totalstep;

}


const mergeSortHelper=(mainArray,startIndex,endIndex,auxillaryArray,totalstep)=>{

    if(startIndex===endIndex) return;

    const middleIndex=Math.floor((endIndex+startIndex)/2);

    mergeSortHelper(auxillaryArray,startIndex,middleIndex,mainArray,totalstep);

    mergeSortHelper(auxillaryArray,middleIndex+1,endIndex,mainArray,totalstep);

    doMerge(mainArray,startIndex,middleIndex,endIndex,auxillaryArray,totalstep);

}

const doMerge=(mainArray,startIndex,middleIndex,endIndex,auxillaryArray,totalstep)=>{

    let k=startIndex;

    let i=startIndex;

    let j=middleIndex+1;

    while(i<=middleIndex && j<=endIndex){

        totalstep.push([i,j]);

        totalstep.push([i,j]);

        if(auxillaryArray[i]<=auxillaryArray[j]){

            totalstep.push([k,auxillaryArray[i]]);

            mainArray[k++]=auxillaryArray[i++];

        }else{

            totalstep.push([k,auxillaryArray[j]]);

            mainArray[k++]=auxillaryArray[j++];

        }

    }

    while(i<=middleIndex){

        totalstep.push([i,i]);

        totalstep.push([i,i]);

        totalstep.push([k,auxillaryArray[i]]);

        mainArray[k++]=auxillaryArray[i++];

    }

    while(j<=endIndex){

        totalstep.push([j,j]);

        totalstep.push([j,j]);

        totalstep.push([k,auxillaryArray[j]]);

        mainArray[k++]=auxillaryArray[j++];

    }

};