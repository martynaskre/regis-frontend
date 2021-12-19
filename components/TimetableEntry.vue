<script>
 export default {
   props: {
     type: {
       required: true,
       type: String,
     },
     title: {
       required: true,
       type: String,
     },
     occursAt: {
       required: true,
       type: Date,
     },
     duration: {
       required: true,
       type: Number,
     },
     bookingId: {
       required: false,
       type: Number,
     }
   }
 }
</script>
