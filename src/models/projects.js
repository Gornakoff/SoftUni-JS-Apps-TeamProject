
import {get, post, update} from './requester';
function create(name, description, callback) {
    let projectData = {
        "projectname": name,
        "descritpion": description
    };
    console.log()
    post('appdata', 'projects', 'kinvey', projectData)
        .then((response) => {
            callback(true)
            });
}

export {create};