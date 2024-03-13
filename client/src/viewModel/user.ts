import { ref, computed } from 'vue';
import type { User } from '@/model/users';


export interface ID {
    id: number;
    user?: User;
  }
  
const users =ref([] as User[]);
const currentID = ref([{ id: -1 }] as ID[]);

export const refUsers = () => users;
export const refCurrentID = () => currentID;


// myVar
export const myUser = computed(() => {
  const idObj = currentID.value[0];

  if (idObj) {
    const user = users.value.find(user => user.id === idObj.id);
    return user ? user : { id: idObj.id, firstName: '' };
    
  }

//   return null;

});


  export const setID = (id: ID) => {
    currentID.value = [id];
    TheID.value = id.id; //magic
  
  };
  // was x 
  export const TheID = ref(myUser.value?.id);