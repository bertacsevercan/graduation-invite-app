import {UserController} from "./controller/UserController";
import {GuestsController} from "./controller/GuestsController";


export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},
{
    method: "get",
    route: "/guests",
    controller: GuestsController,
    action: "all"
    }, {
    method : "get",
    route: "/guests/:id",
    controller: GuestsController,
    action: "one"
    }, {
    method : "post",
    route: "/guests",
    controller: GuestsController,
    action: "save"
    }, {
    method: "delete",
    route: "/guests",
    controller: GuestsController,
    action: "remove"
    },
];