<template>
    <div>
        
    <button id="addBtn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" fdprocessedid="sia2z">ADD NEW USER</button>
    
    
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="display: none;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">ADDING NEW USER</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body wholeModal">
            <form>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">ID:</label>
                <input type="number" class="form-control">
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">NAME:</label>
                <input class="form-control">
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">SURNAME:</label>
                <input type="number" class="form-control" id="message-text">
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">GENDER</label>
                <input  type="number" class="form-control" id="message-text">
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">EMIAL:</label>
                <input class="form-control" id="message-text">
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">IMG:</label>
                <input  type="url" class="form-control" id="message-text">
              </div>
             
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">ADD USER</button>
          </div>
        </div>
      </div>
    </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
#addBtn{
    width: 100px;
    font-size: 10px;
}

.wholeModal{
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.455), rgb(255, 255, 255));

}

</style>