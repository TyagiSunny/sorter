import React from 'react';

//InsertionSort

export const insertionSort=(array)=>{
    let animations=[];
    let key,j;
    for(let i=1;i<array.length;i++){
        key=array[i];
        j=i-1;
        while(j>=0 && array[j]>key){
            animations.push(['red',j+1,j])
            animations.push(['#007acc',j+1,j])
            animations.push(['none',j+1,array[j]])
            array[j+1]=array[j];
            j--;
        }
        animations.push(['none',j+1,key])
        array[j+1]=key;
    }
    return animations;
}

//BubbleSort

export const bubbleSort=(array)=>{
    
    let animations=[];
    let isSwapped=false;
    for(let i=0;i<array.length-1;i++){
        isSwapped=false;
        for(let j=0;j<array.length-i-1;j++){
            animations.push(['red',j,j+1]);
            animations.push(['#007acc',j,j+1]);
            
            if(array[j]>array[j+1]){
                animations.push(['none',j,j+1]);
                swap(array,j,j+1);
                isSwapped=true;
            }

        }
        if(!isSwapped) break;
    }
    return animations;
}

const swap=(array,i,j)=>{
    array[i]=array[i]+array[j];
    array[j]=array[i]-array[j];
    array[i]=array[i]-array[j];
}


// QuickSort

export const quickSort=(array)=>{
    let animations=[];
    if(array.length<=1) return array;
    quickSortHelper(array,0,array.length-1,animations);
    return animations;
}

const quickSortHelper=(array,low,high,animations)=>{
    if(low<high){
        let pi=partition(array,low,high,animations);

        quickSortHelper(array,low,pi-1,animations);
        quickSortHelper(array,pi+1,high,animations);
    }
}

const partition=(array,low,high,animations)=>{
    let pi=array[high];
    let k=low-1;
    for(let i=low;i<=high;i++){
        animations.push(['red',i,high]);
        animations.push(['#007acc',i,high]);
        if(array[i]<pi){
            k++;
            animations.push(['none',i,k]);
            let tmp=array[i];
            array[i]=array[k];
            array[k]=tmp;
            
        }
    }
    animations.push(['red',k+1,high]);
    animations.push(['#007acc',k+1,high]);
    animations.push(['none',k+1,high]);
    let tmp=array[k+1];
    array[k+1]=array[high];
    array[high]=tmp;
    return k+1;
}


//MergeSort

export const mergeSort=(array)=>{
    const animations=[];
    if(array.length<=1) return array;
    const auxillaryArray=array.slice();
    mergeSortHelper(array,0,array.length-1,auxillaryArray,animations);
    return animations;
}

const mergeSortHelper=(mainArray,startIndex,endIndex,auxillaryArray,animations)=>{
    if(startIndex===endIndex) return;
    const middleIndex=Math.floor((endIndex+startIndex)/2);
    mergeSortHelper(auxillaryArray,startIndex,middleIndex,mainArray,animations);
    mergeSortHelper(auxillaryArray,middleIndex+1,endIndex,mainArray,animations);
    doMerge(mainArray,startIndex,middleIndex,endIndex,auxillaryArray,animations);
}

const doMerge=(mainArray,startIndex,middleIndex,endIndex,auxillaryArray,animations)=>{
    let k=startIndex;
    let i=startIndex;
    let j=middleIndex+1;
    while(i<=middleIndex && j<=endIndex){
        animations.push([i,j]);
        animations.push([i,j]);
        if(auxillaryArray[i]<=auxillaryArray[j]){
            animations.push([k,auxillaryArray[i]]);
            mainArray[k++]=auxillaryArray[i++];
        }else{
            animations.push([k,auxillaryArray[j]]);
            mainArray[k++]=auxillaryArray[j++];
        }
    }

    while(i<=middleIndex){
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([k,auxillaryArray[i]]);
        mainArray[k++]=auxillaryArray[i++];
    }

    while(j<=endIndex){
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([k,auxillaryArray[j]]);
        mainArray[k++]=auxillaryArray[j++];
    }
};