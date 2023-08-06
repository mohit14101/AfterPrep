const arr = document.querySelector("#array");
const ll = document.querySelector("#linkedList");
const greddyalgo= document.querySelector("#greedy");
const recur = document.querySelector("#recursion");
const bTrack= document.querySelector("#backtrack");
const bSearch= document.querySelector("#binary");
const heapS  =  document.querySelector("#heaps")
const sQueue = document.querySelector("#stacke");
const str = document.querySelector("#string");
const bTree = document.querySelector("#binarytree");
const bsTree = document.querySelector("#bst");
const grap = document.querySelector("#graph");
const dynamic= document.querySelector("#dp");
const triee = document.querySelector("#trie");
const ans= document.querySelector(".result");
const array=[arr,ll,greddyalgo,recur,bTrack,bSearch,heapS,sQueue,str,bTree, bsTree, grap, dynamic,triee];
const questions = {
    arrlink : ["https://leetcode.com/problems/set-matrix-zeroes/","https://leetcode.com/problems/pascals-triangle/",
    "https://leetcode.com/problems/next-permutation/","https://leetcode.com/problems/maximum-subarray/",
    "https://leetcode.com/problems/sort-colors/"
    ,"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/","https://leetcode.com/problems/rotate-image/"
    ,"https://leetcode.com/problems/merge-intervals/","https://leetcode.com/problems/merge-sorted-array/"
    ,"https://leetcode.com/problems/find-the-duplicate-number/"
    ,"https://www.interviewbit.com/problems/repeat-and-missing-number-array/"
    ,"https://www.codingninjas.com/studio/problems/count-inversions_615"
    ,"https://leetcode.com/problems/reverse-pairs/"
    ,"https://leetcode.com/problems/unique-paths/"
    ,"https://leetcode.com/problems/majority-element-ii/"
    ,"https://leetcode.com/problems/majority-element/"
    ,"https://leetcode.com/problems/powx-n/"
    ,"https://leetcode.com/problems/search-a-2d-matrix/"
    ,"https://leetcode.com/problems/longest-substring-without-repeating-characters/"
    ,"https://www.interviewbit.com/problems/subarray-with-given-xor/"
    ,"https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1"
    ,"https://leetcode.com/problems/longest-consecutive-sequence/"
    ,"https://leetcode.com/problems/4sum/"
    ,"https://leetcode.com/problems/two-sum/"
    ,"https://leetcode.com/problems/max-consecutive-ones/"
    ,"https://leetcode.com/problems/3sum/"
    ,"https://leetcode.com/problems/trapping-rain-water/"
    ,"https://leetcode.com/problems/remove-duplicates-from-sorted-array/"
],
linkedlink : ["https://leetcode.com/problems/reverse-linked-list/"
,"https://leetcode.com/problems/middle-of-the-linked-list/"
,"https://leetcode.com/problems/merge-two-sorted-lists/"
,"https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
,"https://leetcode.com/problems/add-two-numbers/"
,"https://leetcode.com/problems/delete-node-in-a-linked-list/"
,"https://leetcode.com/problems/rotate-list/description/"
,"https://leetcode.com/problems/copy-list-with-random-pointer/"
,"https://leetcode.com/problems/intersection-of-two-linked-lists/"
,"https://leetcode.com/problems/linked-list-cycle/"
,"https://leetcode.com/problems/reverse-nodes-in-k-group/"
,"https://leetcode.com/problems/palindrome-linked-list/"
,"https://leetcode.com/problems/linked-list-cycle-ii/"
,"https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1"
],
greedylink: ["https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1"
,"https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1#"
,"https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1#"
,"https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1"
,"https://www.geeksforgeeks.org/find-minimum-number-of-coins-that-make-a-change/"
,"https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1"
],
recursionlink: ["https://practice.geeksforgeeks.org/problems/subset-sums2234/1"
,"https://leetcode.com/problems/subsets-ii/"
,"https://leetcode.com/problems/combination-sum/"
,"https://leetcode.com/problems/combination-sum-ii/"
,"https://leetcode.com/problems/palindrome-partitioning/"
,"https://leetcode.com/problems/permutation-sequence/"
],
backtrackinglink: ["https://leetcode.com/problems/permutations/"
,"https://leetcode.com/problems/n-queens/"
,"https://leetcode.com/problems/sudoku-solver/"
,"https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1#"
,"https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1"
,"https://www.codingninjas.com/studio/problems/983635?topList=striver-sde-sheet-problems"
],
binarylink: ["https://www.codingninjas.com/studio/problems/1062679?topList=striver-sde-sheet-problems"
,"https://www.codingninjas.com/studio/problems/median-of-a-row-wise-sorted-matrix_1115473"
,"https://leetcode.com/problems/single-element-in-a-sorted-array/"
,"https://leetcode.com/problems/search-in-rotated-sorted-array/"
,"https://leetcode.com/problems/median-of-two-sorted-arrays/"
,"https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1"
,"https://www.codingninjas.com/studio/problems/ayush-gives-ninjatest_1097574?topList=striver-sde-sheet-problems"
,"https://www.codingninjas.com/studio/problems/aggressive-cows_1082559"
],
heaplink: ["https://www.codingninjas.com/studio/problems/min-heap_4691801?topList=striver-sde-sheet-problems"
,"https://www.codingninjas.com/studio/problems/median-in-a-stream_975268"
,"https://leetcode.com/problems/kth-largest-element-in-an-array/"
,"https://leetcode.com/problems/find-median-from-data-stream/"
,"https://www.codingninjas.com/studio/problems/merge-k-sorted-arrays_975379"
,"https://leetcode.com/problems/top-k-frequent-elements/"
],
stacklink: ["https://www.codingninjas.com/studio/problems/stack-implementation-using-array_3210209"
,"https://www.codingninjas.com/studio/problems/implement-queue-using-arrays_8390825"
,"https://leetcode.com/problems/implement-stack-using-queues/"
,"https://leetcode.com/problems/implement-queue-using-stacks/"
,"https://leetcode.com/problems/valid-parentheses/"
,"https://leetcode.com/problems/next-greater-element-i/"
,"https://www.codingninjas.com/studio/problems/sort-a-stack_985275?topList=striver-sde-sheet-problems"
,"https://www.codingninjas.com/studio/problems/immediate-smaller-element-_1062597"
,"https://leetcode.com/problems/lfu-cache/"
,"https://leetcode.com/problems/lru-cache/"
,"https://leetcode.com/problems/largest-rectangle-in-histogram/"
,"https://leetcode.com/problems/sliding-window-maximum/"
,"https://leetcode.com/problems/min-stack/"
,"https://leetcode.com/problems/rotting-oranges/"
,"https://leetcode.com/problems/online-stock-span/"
,"https://www.codingninjas.com/studio/problems/max-of-min_982935?topList=striver-sde-sheet-problems"
,"https://www.codingninjas.com/studio/problems/the-celebrity-problem_982769"
],
stringlink: ["https://leetcode.com/problems/reverse-words-in-a-string/"
,"https://leetcode.com/problems/longest-palindromic-substring/"
,"https://leetcode.com/problems/roman-to-integer/"
,"https://leetcode.com/problems/string-to-integer-atoi/"
,"https://leetcode.com/problems/longest-common-prefix/"
,"https://leetcode.com/problems/repeated-string-match/solutions/416144/Rabin-Karp-algorithm-C++-implementation/"
,"https://www.interviewbit.com/problems/minimum-characters-required-to-make-a-string-palindromic/"
,"https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/"
,"https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/"
,"https://leetcode.com/problems/valid-anagram/"
,"https://leetcode.com/problems/count-and-say/"
,"https://leetcode.com/problems/compare-version-numbers/"
],
btreelink: ["https://leetcode.com/problems/binary-tree-inorder-traversal/"
,"https://leetcode.com/problems/binary-tree-preorder-traversal/"
,"https://leetcode.com/problems/binary-tree-postorder-traversal/"
,"https://leetcode.com/problems/binary-tree-inorder-traversal/"
,"https://www.codingninjas.com/studio/problems/preorder-traversal_3838888?topList=striver-sde-sheet-problems"
,"https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1"
,"https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1"
,"https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1"
,"https://www.codingninjas.com/studio/problems/981269?topList=striver-sde-sheet-problems"
,"https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/"
,"https://www.codingninjas.com/studio/problems/all-root-to-leaf-paths-in-binary-tree._983599"
,"https://leetcode.com/problems/maximum-width-of-binary-tree/"
,"https://leetcode.com/problems/binary-tree-level-order-traversal/"
,"https://leetcode.com/problems/maximum-depth-of-binary-tree/"
,"https://leetcode.com/problems/diameter-of-binary-tree/"
,"https://leetcode.com/problems/balanced-binary-tree/"
,"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/"
,"https://leetcode.com/problems/same-tree/"
,"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"
,"https://leetcode.com/problems/boundary-of-binary-tree/"
,"https://leetcode.com/problems/binary-tree-maximum-path-sum/"
,"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"
,"https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/"
,"https://leetcode.com/problems/symmetric-tree/"
,"https://leetcode.com/problems/flatten-binary-tree-to-linked-list/"
,"https://practice.geeksforgeeks.org/problems/mirror-tree/1"
,"https://www.codingninjas.com/studio/problems/children-sum-property_8357239"
],
bstreelink: ["https://leetcode.com/problems/populating-next-right-pointers-in-each-node/"
,"https://leetcode.com/problems/search-in-a-binary-search-tree/"
,"https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/"
,"https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/"
,"https://leetcode.com/problems/validate-binary-search-tree/"
,"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"
,"https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1"
,"https://www.codingninjas.com/studio/problems/floor-from-bst_920457?source=youtube&campaign=Striver_Tree_Videos"
,"https://www.codingninjas.com/studio/problems/ceil-from-bst_920464?source=youtube&campaign=Striver_Tree_Videos"
,"https://leetcode.com/problems/kth-smallest-element-in-a-bst/"
,"https://practice.geeksforgeeks.org/problems/kth-largest-element-in-bst/1"
,"https://leetcode.com/problems/two-sum-iv-input-is-a-bst/"
,"https://leetcode.com/problems/binary-search-tree-iterator/"
,"https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/"
,"https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"
],
graphlink: ["https://leetcode.com/problems/clone-graph/"
// ,""
// ,""
// ,""
// ,""
// ,""
],
dplink: ["https://leetcode.com/problems/maximum-product-subarray/"
// ,""
// ,""
// ,""
// ,""
// ,""
],
trielink: ["https://leetcode.com/problems/implement-trie-prefix-tree/"
// ,""
// ,""
// ,""
// ,""
// ,""
],
};
// const topics = [questions.arrlink,linkedlink,greddylink,recursionlink,backtrackinglink,binarylink,heaplink,stacklink,stringlink,btreelink,bstreelink,graphlink,dplink,trielink];
const topics = [
    questions.arrlink, questions.linkedlink, questions.greedylink,
    questions.recursionlink, questions.backtrackinglink, questions.binarylink,
    questions.heaplink, questions.stacklink, questions.stringlink,
    questions.btreelink, questions.bstreelink, questions.graphlink,
    questions.dplink, questions.trielink
  ];
function getRandom(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}
async function getLink(){
    let combined=["0"];
    for(let i=0;i<14;i++){
        if(array[i].checked){
            combined = combined.concat(topics[i]);
        }
    }
    if(combined.length==1){
        alert("please select any topic");
    }
    else{
    let index= await getRandom(1,combined.length);
    ans.href= combined[index];
    ans.textContent = "Leetcode" ;
    ans.classList.add("active");
    }
}
const res= document.querySelector(".rescue");
const selectedElements = document.querySelectorAll(".selection");
selectedElements.forEach((element) => {
  element.addEventListener("click", function() {
    res.classList.add("active");
  });
});
res.addEventListener("click",getLink);
const selectTopic = document.querySelector(".choice");
const maincontent = document.querySelector(".topic");
selectTopic.addEventListener("click",function(){
    maincontent.classList.add("active");
});
