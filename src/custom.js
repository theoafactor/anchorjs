import AnchorMixer from "./anchor"


const customjs = (function(){


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




}( new AnchorMixer))



window.customjs = customjs