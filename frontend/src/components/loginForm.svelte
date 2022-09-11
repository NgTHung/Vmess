<script>
 
</script>
<style>
	form{
		width: auto;
		height: auto;
		max-width: 300px;
		max-height: 200px;
		border: 1px solid #DEE3ED;
		border-radius: 30px;
		background-color: #FBFBFB;
		margin: 40px;
	}
	input[type=submit]{
		margin: 1px;
		border: 1px solid #2F528F;
		background-color: #F2F2F2;
		font-weight: bold;
		padding: 3px 10px;
		border-radius: 7px;
		margin-bottom: 15px;
		margin-top: 15px;
	}
	div:not(.big){
		display: flex;
		justify-content: center;
	}
	input[type=text], input[type=password]{
		width: 100%;
		margin: 0 20px;
		margin-top: 20px;
		border: 1px solid #C3CCDB;
		border-radius: 30px;
		background-color: #F2F2F2;
		padding: 5px;
		padding-left: 30px;
	}
	input::placeholder{
		color: black;
	}
</style>
<!-- <div class="big"> -->
	<form >
		<div>
			<input type="text" placeholder="Tên tài khoảng..."/>
		</div>
	
		<div>
			<input type="password" placeholder="Mật khẩu..."/>
		</div>
	
		<div class="inp">
			<input type="submit" value="Đăng nhập" class="submit">
		</div>
	</form>
<!-- </div> -->