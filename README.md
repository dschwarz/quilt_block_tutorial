<h1>Quilt Block Tutorial</h1>

<p>The goal of this project is to display step-by-step quilt block instructions in a simple, yet pretty way.</p>

<p>Each quilt block is defined in a JSON object.  A JavaScript quilt "block" object is initialized with the name of the block.  The object reads the JSON definition and then executes canvas drawing functions based on the definition.</p>

<p>There are no images on the tutorial pages.  All the quilt block graphics are done with the HTML5 canvas tag.</p>

<p>This project uses Twitter Bootstrap for page layout, with customized CSS for a brighter, flatter look.  It takes advantage of Bootstrap's responsive functionality and looks pretty on desktops, tablets, and phones.</p>

<p>See <a href="http://tumblingblocks.net/quilt_block_tutorial/ohioStar.html">http://tumblingblocks.net/quilt_block_tutorial/ohioStar.html</a>.
	
<h2>Next Steps</h2>

<ul>
	<li>Dynamically pull in block name from page name.  (Done, but differently.  Sharing nav bar instead. Without moving this into some sort of database-driven site, there was no point in making the block name dynamic because the instructions aren't dynamic.)</li>
	<li>More quilt blocks</li>
	<li>Dashed sewing lines?</li>
	<li>Work on way to illustrate folded fabric.</li>
</ul>