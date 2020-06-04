const handelAddMeal = () => {
    console.log("adding meal")
    const modalEle = document.querySelector(".interface")
    const body = document.getElementsByTagName("body")[0]
    if (modalEle && body) {
        modalEle.classList.toggle("interface-open")
        body.classList.toggle("modal-open")
    }
}