

<div class="made-box">
    <div class="key"></div>
</div>
    
<style>
    
    .made-box {
        width: 100px;
        height: 100px;
        border: 2px solid #0005;
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
    }

    .made-box .key{
        width: 15px;
        height: 15px;
        border: 2px solid var(--light-color);
        position: absolute;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .made-box .key::after{
        content: "";
        display: block;
        background: var(--light-color);
        width: 5px;
        height: 5px;
    }

</style>