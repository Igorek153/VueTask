<template>
  <div class="main">
      <form class="form" @click.self="closeForm">
          <div class="search-wrapper" @click.self="closeForm">
              <h1 @click="closeForm">It's time to find <span @click="closeForm"  class="mainTextColour">the perfect job </span></h1>
                  <input class="search"
                         type="text"
                         v-model="search"
                         @click="showForm"
                         placeholder="Search"/>
                  <div class="wrapper" v-if="isHidden">
                      <div class="wrapperChild">
                          <div class="btnClose" @click="btnClose">x</div>

                          <div class="searchCard"
                               v-if="search.length > 0 ">
                              <div class="btnBack" @click="backToItem"> &lt; Back</div>
                              <div class="searchCardItem"
                                   v-for="a in filteredList" :key="a.id"
                                   @click="showProductBack(a) || setCurrent(a)">
                                  <div class="textJobs">
                                      <small> {{ a.jobs }} jobs </small>
                                  </div>
                                  <div class="cardItemText">
                                      <img class="imgCard" :src="a.img"/>
                                      <div class="textName">
                                          <strong>{{ a.name }} </strong>
                                      </div>
                                      <div class="textClass">
                                          <small> {{ a.class }} </small>
                                      </div>
                                  </div>

                              </div>
                          </div>

                          <div class="itemCard" v-else >
                              <div class="page">
                                  <h4 class="itemName">Location</h4>
                                  <div class="searchItem">
                                      <div class="item" v-for="(item, i ) in location" :key="i" @click="setCurrent(item) || showProduct(item)"
                                           :class="{'item-change': item.active}">
                                          {{ item.name }}
                                      </div>
                                      <div class="btnMore">Show more</div>
                                  </div>
                              </div>

                              <div class="page">
                                  <h4 class="itemName">Requirements</h4>
                                  <div class="searchItem">
                                      <div class="item" v-for="(item, i ) in requirements" :key="i" @click="setCurrent(item) || showProduct(item)"
                                           :class="{'item-change': item.active}">
                                          {{ item.name }}
                                      </div>
                                      <div class="btnMore">Show more</div>
                                  </div>
                              </div>

                              <div class="page">
                                  <h4 class="itemName">Tasks</h4>
                                  <div class="searchItem">
                                      <div class="item" v-for="(item, i ) in task" :key="i" @click="setCurrent(item) || showProduct(item)"
                                           :class="{'item-change': item.active}">
                                          {{ item.name }}
                                      </div>
                                      <div class="btnMore">Show more</div>
                                  </div>
                              </div>

                              <div class="page">
                                  <h4 class="itemName">Required Experience</h4>
                                  <div class="searchItem">
                                      <div class="item" v-for="(item, i ) in requiredExperience" :key="i" @click="setCurrent(item) || showProduct(item)"
                                           :class="{'item-change': item.active}">
                                          {{ item.name }}
                                      </div>
                                      <hr class="verticalLine">
                                      <div class="btnMore">Positions</div>
                                      <div class="btnMore">Companies</div>
                                      <div class="btnMore">Benefits</div>
                                  </div>

                              </div>

                              <div class="footerForm" v-if="isHidden2">
                                  <div class="selected-item" >
                                      <div class="btnSalary">{{ selectedItem.price }} a year</div>
                                      <div class="btnVacancies">Show {{ selectedItem.jobs }} vacancies</div>
                                      <div class="btnClear" @click="clear"><strong>Clear</strong></div>
                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
      </form>


  </div>
</template>

<script>

import {mapGetters, mapState} from 'vuex'
export default {

  name: 'TaskSearch',
  data: () => ({

    isHidden: false,
    isHidden2: false,

    search: '',
    selectedItem: {},

  }),
  methods: {
    clear(){
      this.isHidden2 = false;
      this.clearAll(this.requirements);
      this.clearAll(this.location);
      this.clearAll(this.requiredExperience);
      this.clearAll(this.task);
    },


    setCurrent(item) {
      item.active = !item.active
    },

    clearAll(obj){
      for (let i in obj) {
        if (obj[i].active === true){
          obj[i].active = false
        }

      }
    },

    showForm(){
      this.isHidden = true
    },
    closeForm(){
      this.isHidden = false
      this.search = ''
      this.isHidden2 = false;
    },
    btnClose(){
      this.search = ''
      this.isHidden = false;
      this.isHidden2 = false;
      this.clearAll(this.requirements);
      this.clearAll(this.location);
      this.clearAll(this.requiredExperience);
      this.clearAll(this.task);
    },
    showProduct(item) {
      this.selectedItem = item;
      this.isHidden2 = true;

    },

    backToItem(){
      this.search = ''
    },

    showProductBack: function (item) {
      this.search = ''
      this.selectedItem = item;
      this.isHidden2 = true;


    }
  },
  computed: {

    filteredList() {
      return this.allData.filter(item => {
        return item.name.toLowerCase().includes(this.search.toLowerCase())
      })

    },
    ...mapState([
      'requirements',
      'location',
      'task',
      'requiredExperience'
    ]),
    ...mapGetters([
      'allData'
    ])

  }
}
</script>


<style scoped>

    .verticalLine{
        height: 50px;
        width: 1px; border: none;
        border-left: 1px solid hsla(200, 10%, 50%,100);
        margin-right: 10px
    }
    .textName{
        display: flex;
    }
    .textClass{
        float: left;
    }
    .cardItemText{
        display: inline
    }
    .imgCard{
        width: 30px;
        height: 30px;
        float: left;
        margin-right: 10px
    }
    .textJobs{
        float: right;
    }
    .searchCard{
        max-height: 450px;
        overflow-y: auto
    }
    .mainTextColour{
        color: #f32f2f;
    }
    .searchCardItem{
        height: 50px;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 20px;
    }
    .searchCardItem:hover{
        background: #eeeeee;
        cursor: pointer;
    }
    .btnClear{
        float: right;
        display: inline-block;
        color: rgba(12, 12, 12, 0.68);
        border: 1px solid #acacac;
        border-radius: 30px;
        background: rgba(255, 254, 254, 0.98);
        cursor:pointer;
        padding: 15px;
        text-align: center;
        margin-right: 10px;
        margin-top: 5px;
    }
    .btnBack{
        color: #2699ff;
        background: rgba(255, 254, 254, 0.98);
        cursor:pointer;
        position: relative;
        width: 50px;
        padding: 5px;
        margin-bottom: 5px;
    }
    .selected-item{
        padding-bottom: 60px;
    }
    .btnSalary{
        float: left;
        color: #2b9bff;
        margin-top: 20px;
    }
    .btnVacancies{
        float:right;
        display: inline-block;
        color: #ffffff;
        border: none;
        border-radius: 30px;
        background: rgb(38, 139, 227);
        cursor:pointer;
        text-align: center;
        padding: 20px;
    }

    .btnMore{
        display: inline-block;
        color: #1e85de;
        border: 1px solid #165e9c;
        border-radius: 30px;
        background: rgba(255, 254, 254, 0.98);
        cursor:pointer;
        padding: 15px;
        text-align: center;
        margin-right: 10px;

    }
    .page{
        margin-bottom: 20px;
    }
    .item{
        display: none;
        color: #666666;
        border: 1px solid #c2c2c2;
        border-radius: 30px;
        background: #FCFCFC;
        font-size: 12px;
        padding: 15px;
        cursor:pointer;
        margin-right: 10px;
        text-align: center;
        align-self: center;
        min-width: 15px;
        transition: background .3s;
    }

    .item:nth-child(-n+4){
        display: inline-block;
    }
    .item-change {
        display:inline-block;
        color: #f32f2f;
        border: 1px solid #ff9696;
        border-radius: 30px;
        background: rgba(250, 209, 209, 0.92);
        font-size: 12px;
        padding: 15px;
        cursor:pointer;
        margin-right: 10px;
        text-align: center;
        align-self: center;
        min-width: 15px;
        transition: background .3s

    }

    .itemName{
        text-align: left;
        padding-bottom: 10px;
    }
.searchItem{
    display: flex;
}

.btnClose{
    float: right;
    color:black;
    border:2px solid black;
    width: 20px;
    border-radius: 15px;
    background:white;
    cursor:pointer;
    text-align: center;


}
.wrapper{
    background: white;
    margin: 0 auto;
    padding: 15px;
    border: none;
    border-radius: 25px;
    width: 800px;
}

.main{
  width: 100%;
  height: 800px;
  background: url("./../assets/back.jpg") no-repeat ;
  background-size: 100%;
}
.form{
    padding: 100px;
}

.search{
    border: none;
    width: 450px;
    height: 70px;
    border-radius: 100px;
    padding-left: 10px;
    margin-bottom: 15px;
    margin-top: 15px;
}

</style>
