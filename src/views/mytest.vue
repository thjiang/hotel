<style lang="less" scoped="scoped">
	div {
	    color: red;
	}

	.content {
		color: purple;
		transform: translateY(40px);
	}
</style>

<template>
	<div>
		这是{{page}}页面
		<div class="content">
			这是一段紫色的字
		</div>
	</div>
</template>

<script>

export default {
    data: function() {
        return {
            page: '测试模块'
        }
    }
}
</script>
