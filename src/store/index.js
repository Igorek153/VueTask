import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    requirements: [
      {
        id: 1,
        name: "JavaScript",
        price: '$10000',
        jobs: '123',
        class: 'Programming technology',
        img: 'https://admin.loneo.biz/grey_icons/programminglanguage.svg',
        active: false,
      },
      {
        id: 2,
        name: "Vue",
        price: '$20000',
        jobs: '321',
        class: 'Programming technology',
        img: 'https://admin.loneo.biz/grey_icons/programminglanguage.svg',
        active: false,
      },
      {
        id: 3,
        name: "React",
        price: '$30000',
        jobs: '111',
        class: 'Programming technology',
        img: 'https://admin.loneo.biz/grey_icons/programminglanguage.svg',
        active: false,

      },
      {
        id: 4,
        name: "Angular",
        price: 50000,
        jobs: '42',
        class: 'Programming technology',
        img: 'https://admin.loneo.biz/grey_icons/programminglanguage.svg',
        active: false,
      }],
    location: [
      {
        id: 5,
        name: "New York",
        price: "65000",
        jobs: '12',
        class: 'Location',
        img: 'https://admin.loneo.biz/grey_icons/location.svg',
        active: false,

      },
      {
        id: 6,
        name: "Los Angneles",
        price: "$56000",
        jobs: '242',
        class: 'Location',
        img: 'https://admin.loneo.biz/grey_icons/location.svg',
        active: false,
      },
      {
        id: 7,
        name: "Chicago",
        price: "$71000",
        jobs: '28',
        class: 'Location',
        img: 'https://admin.loneo.biz/grey_icons/location.svg',
        active: false,
      },


    ],
    task: [
      {
        id: 8,
        name: "Creating reports",
        price: "65000",
        jobs: '123',
        class: 'Task',
        img: 'https://admin.loneo.biz/grey_icons/task.svg',
        active: false,
      },
      {
        id: 9,
        name: "Providing service",
        price: "$56000",
        jobs: '33',
        class: 'Task',
        img: 'https://admin.loneo.biz/grey_icons/task.svg',
        active: false,
      },
      {
        id: 10,
        name: "Recruiting staff",
        price: "$71000",
        jobs: '52',
        class: 'Task',
        img: 'https://admin.loneo.biz/grey_icons/task.svg',
        active: false,
      },
      {
        id: 11,
        name: "Writing code",
        price: "65000",
        jobs: '11',
        class: 'Task',
        img: 'https://admin.loneo.biz/grey_icons/task.svg',
        active: false,
      },
      {
        id: 12,
        name: "Collecting data",
        price: "$56000",
        jobs: '63',
        class: 'Task',
        img: 'https://admin.loneo.biz/grey_icons/task.svg',
        active: false,
      },
      {
        id: 13,
        name: "Managing calendar",
        price: "$71000",
        jobs: '42',
        class: 'Task',
        img: 'https://admin.loneo.biz/grey_icons/task.svg',
        active: false,
      },
    ],
    requiredExperience: [
      {
        id: 14,
        name: "0",
        price: "65000",
        jobs: '23',
        active: false,
      },
      {
        id: 15,
        name: "1 year",
        price: "$56000",
        jobs: '33',
        active: false,
      },
      {
        id: 16,
        name: "2 years",
        price: "$71000",
        jobs: '52',
        active: false,
      },
      {
        id: 17,
        name: "5+years",
        price: "$83000",
        jobs: '23',
        active: false,
      },
    ],
  },
  getters: {
    allData: state => {
      return state.requirements.concat(state.location, state.task);

    }
  }

})
