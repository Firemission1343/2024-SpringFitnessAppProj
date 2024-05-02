<script setup lang="ts">
import { getUsers, type User } from '@/model/users';
import { refSession, useLogin, useAddUser } from '@/viewModel/session';
import { ref } from 'vue';

//Defaults refs
const NewUser = ref({
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    handle: '',
    thumbnail: 'https://bulma.io/images/placeholders/128x128.png',
    image: 'https://bulma.io/images/placeholders/128x128.png',
    friends: [],
});

    const session = refSession();

    const users = ref([] as User[])
    getUsers()
        .then((data) => users.value = data.slice(0, 5))
        .catch((error) => console.error(error));
    ;

    const { login, logout } = useLogin();

    function doLogin(user: User) {
        login(user);
    }

    function doLogout() {
        logout();
    }

    const { addUser } = useAddUser();
    
    function onSubmit(event: Event) {
    event.preventDefault();
    addUser(NewUser.value);
    NewUser.value = {
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        handle: '',
        thumbnail: 'https://bulma.io/images/placeholders/128x128.png',
        image: 'https://bulma.io/images/placeholders/128x128.png',
        friends: [],
    };
}
const showSignUpForm = ref(false);

    function toggleSignUpForm() {
    showSignUpForm.value = !showSignUpForm.value;
    }



</script>

<template>
    <div class="badge" v-if="session.user">


        
    </div>
    <div class="buttons" v-else>
        <a class="button is-primary" @click="toggleSignUpForm" v-if="!session.user">
            <strong>Sign up</strong>
        </a>

        <form v-if="showSignUpForm" @submit="onSubmit" class="signup-form">
            <div class="field">
                <label for="firstName" class="label">First Name:</label>
                <input type="text" id="firstName" v-model="NewUser.firstName" class="input">
            </div>
            <div class="field">
                <label for="lastName" class="label">Last Name:</label>
                <input type="text" id="lastName" v-model="NewUser.lastName" class="input">
            </div>
            <div class="field">
                <label for="email" class="label">Email:</label>
                <input type="email" id="email" v-model="NewUser.email" class="input">
            </div>
            <div class="field">
                <label for="password" class="label">Password:</label>
                <input type="password" id="password" v-model="NewUser.password" class="input">
            </div>
            <div class="field">
                <label for="handle" class="label">Handle:</label>
                <input type="text" id="handle" v-model="NewUser.handle" class="input">
            </div>
            <button type="submit" class="button is-primary">Submit</button>
        </form>

        <div class="navbar-item has-dropdown is-hoverable" v-if="!showSignUpForm">
        <a class="navbar-link">
          Login
        </a>

        <div class="navbar-dropdown">
          <a v-for="user in users" class="navbar-item" @click="doLogin(user)">
            {{ user.firstName }} {{ user.lastName }}
          </a>
        </div>
      </div>

    </div>
</template>

<style scoped>
    .badge {
        display: flex;
        align-items: center;
        line-height: 1em;
    }
    .badge img {
        border-radius: 50%;
        margin-right: 0.5em;
    }
    .signup-form {
        margin-top: 1em;
    }
    .signup-form .field {
        margin-bottom: 1em;
    }
    .signup-form .label {
        font-weight: bold;
    }
    .signup-form .input {
        width: 100%;
        padding: 0.5em;
        border-radius: 4px;
        border: 1px solid #ddd;
    }
    .signup-form .button {
        width: 100%;
    }
    @media (max-width: 768px) {
        .navbar-item.has-dropdown.is-hoverable .navbar-dropdown {
            position: static;
            box-shadow: none;
            padding: 0;
        }
        .navbar-item.has-dropdown.is-hoverable .navbar-dropdown a {
            padding: 0.5em 1em;
            display: block;
        }
    }
</style>