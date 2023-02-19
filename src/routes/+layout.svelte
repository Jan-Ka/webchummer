<script lang="ts">
	import '../global.scss';
	import Navbar from '../lib/navbar.svelte';
</script>

<Navbar />

<div class="container-fluid">
	<slot />
</div>
