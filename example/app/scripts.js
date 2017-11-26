jQuery(document).ready(function(){
    /*jQuery(".overview").click(function(){
        loadBlockchainData()
    });*/

    loadBlockchainData()

    function loadBlockchainData() {
        console.log('loadBlockchainData')

        $.getJSON( "../blockchain3000.json", function( data ) {
            var block_body;
            var block_body_array = [];
            $.each( data, function( key, val ) {
                console.log('data ', key, val)
                block_body = "<div class='block'><span>Index: </span> "+val.index+"<br/><span>PreviousHash: </span>"+val.previousHash+"<br/><span>Proof:</span> "+val.proof+"<br/><span>Timestamp:</span> "+val.timestamp+"</div>";
                $.each(data[key].transactions, function(key, val){
                    console.log('transactions ', key, val)
                    block_body += "<div class='transaction_on_block'><span>Sender:</span> "+val.sender+" <span>Recipient: </span>"+val.recipient+" <span>Value: </span>"+ val.value+"</div>"
                })
                block_body_array.push(block_body)
            });
            $("#target_table_id_1").html(block_body_array);
        });

        $.getJSON( "../blockchain3001.json", function( data ) {
            var block_body;
            var block_body_array = [];
            $.each( data, function( key, val ) {
                console.log('data ', key, val)
                block_body = "<div class='block'><span>Index: </span> "+val.index+"<br/><span>PreviousHash: </span>"+val.previousHash+"<br/><span>Proof:</span> "+val.proof+"<br/><span>Timestamp:</span> "+val.timestamp+"</div>";
                $.each(data[key].transactions, function(key, val){
                    console.log('transactions ', key, val)
                    block_body += "<div class='transaction_on_block'><span>Sender:</span> "+val.sender+" <span>Recipient: </span>"+val.recipient+" <span>Value: </span>"+ val.value+"</div>"
                })
                block_body_array.push(block_body)
            });
            $("#target_table_id_2").html(block_body_array);
        });

        $.getJSON( "../blockchain3002.json", function( data ) {
            var block_body;
            var block_body_array = [];
            $.each( data, function( key, val ) {
                console.log('data ', key, val)
                block_body = "<div class='block'><span>Index: </span> "+val.index+"<br/><span>PreviousHash: </span>"+val.previousHash+"<br/><span>Proof:</span> "+val.proof+"<br/><span>Timestamp:</span> "+val.timestamp+"</div>";
                $.each(data[key].transactions, function(key, val){
                    console.log('transactions ', key, val)
                    block_body += "<div class='transaction_on_block'><span>Sender:</span> "+val.sender+" <span>Recipient: </span>"+val.recipient+" <span>Value: </span>"+ val.value+"</div>"
                })
                block_body_array.push(block_body)
            });
            $("#target_table_id_3").html(block_body_array);
        });

    }
});
