<div class="block " id="<?php echo $id; ?>">
    <div class="nav-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24h-24z" fill="none"/>
            <path class="vector" d="M20 11h-12.17l5.59-5.59-1.42-1.41-8 8 8 8 1.41-1.41-5.58-5.59h12.17v-2z"/>
        </svg>

    </div>
    <div class="primary"><span><?php echo $primary; ?></span></div>
    <div class="secondary"><span><?php echo $secondary; ?></span></div>
    <div class="tertiary"><span><?php echo $tertiary; ?></span></div>
    <div class="book-memos-wrapper">
        <div class="book-memos">
        <?php 
            $this->load->view('books/'.$view);
        ?>
        </div>
    </div>
</div> 
