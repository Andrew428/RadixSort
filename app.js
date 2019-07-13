/* RadixSort */
import  RadixSort from './util/RadixSort.js';

window.onload = () => {
    const rs = new RadixSort();
    console.log('RadixSort', rs.radixSort([9,5,8,6,7,3,4,96,1,8,3,3,5,4,85,5,5]));
  
};