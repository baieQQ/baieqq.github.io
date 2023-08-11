let ary = [];

axios.get('https://hexschool.github.io/ajaxHomework/data.jsonq')
  .then(function (response) {
    ary = response.data;
    renderData()
  })
  .catch(error => {
    console.log(error)
  })

  function renderData(){
    const title = document.querySelector('.title');
    title.textContent = ary[0].name;
  }
  
  console.log(ary)