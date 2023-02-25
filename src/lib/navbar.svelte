<script lang="ts">
	import Logo from '../assets/webchummer_logo.min.svg';
	import { sidebarOpen } from '../stores/stores';
</script>

<header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
	<a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="/">
		<img
			src={Logo}
			alt="Friend-shaped Troll with prominent Horns, the Body is pink and the Head is green."
			title="The webchummer logo"
			width="40"
			height="40"
		/>
		<span class="appname">webchummer</span></a
	>
	<button
		class="navbar-toggler position-absolute d-md-none collapsed"
		type="button"
		on:click={sidebarOpen.toggle}
		aria-controls="sidebarMenu"
		aria-expanded="false"
		aria-label="Toggle navigation"
	>
		<span class="navbar-toggler-icon" />
	</button>
	<input
		class="form-control form-control-dark w-100 rounded-0 border-0"
		type="text"
		placeholder="Search"
		aria-label="Search"
	/>
	<div class="navbar-nav">
		<div class="nav-item text-nowrap">
			<a class="nav-link px-3" href="#">Sign out</a>
		</div>
	</div>
</header>

<style lang="scss">
	.appname {
		font-family: 'Zen Dots';
	}

	.navbar-brand {
		min-width: 13rem;
	}

	.navbar-toggler {
		top: 0.25rem;
		right: 1rem;
	}
</style>
