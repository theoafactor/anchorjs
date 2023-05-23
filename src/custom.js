//import the AnchorMixer
import AnchorMixer from "./anchor";


/**
 * This is where all the implementations will take place
 */
const code_engine = (function(){


    function createModal(){

        let modal_element = `<div class="modal" tabindex="-1" id="modal-id">
                                        <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                            <h5 class="modal-title">Modal title</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                            </div>
                                            <div class="modal-body">
                                            <p>Modal body text goes here.</p>
                                            </div>
                                            <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>`;

                const elem = document.createElement("div")

                elem.innerHTML = modal_element;

                document.body.appendChild(elem);

                $("#modal-id").modal("show")

    }


    return {
        createModal: createModal
    }

}())







/**
 * Custom Library/Interface to make available for interaction
 */
const CustomJS = (function(anchorMixer, code_engine){

    let dependencies = anchorMixer.load_dependencies();

    //once the DOM has been loaded completely
    document.addEventListener("DOMContentLoaded", function(){

        anchorMixer.initializeAnchor(dependencies);

    })



    //create a new CustomJs app
    //and return the methods to use
    async function createApp(){

        dependencies = await dependencies

        // console.log(dependencies)

        if(dependencies){
            //load the methods
            return {
                createModal: code_engine.createModal
            }

        }
            


    }


    return {
        createApp: createApp

    }







}(new AnchorMixer, code_engine));


window.CustomJS = CustomJS