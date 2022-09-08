<template>
	<div class="div-bcg">
		<div class="container">
			<div class="flex-div">
				<p class="tcenter">In this App</p>
				<ul>
					<li>• Global settings for vue-cli</li>
					<li>• Transfer parameters from child to parent and back</li>
					<li>• Component approach</li>
					<li>• Element filtering</li>
					<li>• Editing and deleting elements</li>
				</ul>
				<span class="centrich">My <a href="https://github.com/Liknox" target="_blank" class="link">github</a> account</span>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
// .div-bcg {
//    display: none;
// }
// @media (max-width: 600px) {
.div-bcg {
	display: block;
	background-color: white;
	padding-bottom: 20px;
}
.flex-div {
	display: flex;
	flex-direction: column;
	max-width: 800px;
	font-size: 20px;
	margin: 0 auto;
}
.tcenter {
	align-self: center;
	font-size: 20px;
	color: #402caf;
	font-size: 25px;
	margin-bottom: 5px;
}
.centrich {
	align-self: center;
}
// }
@media (max-width: 600px) {
	.div-bcg {
		display: block;
		background-color: white;
	}
	.flex-div {
		display: flex;
		flex-direction: column;
	}
	.tcenter {
		align-self: center;
		font-size: 20px;
		color: #402caf;
		margin-bottom: 5px;
	}
}
</style>