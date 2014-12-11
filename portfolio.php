<?php 
  
	$portfolios = array();
    	$portfolios[1] = array(
    		"name" => "What I Wish You Knew",
    		"img" => "images/thumbs/wiwyk_thumb.png"
    	); 
		$portfolios[2] = array(
    		"name" => "Liz Kalish Paintings",
    		"img" => "images/thumbs/lizkalish_thumb.png"
    	);
		$portfolios[3] = array(
	        "name" => "Foundation for Osteopathic Research and Continuous Education (FORCE)",
	        "img" => "images/thumbs/force-web-proposal_p1_thumb.png"
		);
    	$portfolios[4] = array(
    		"name" => "Business Performance Institute",
    		"img" => "images/thumbs/bpi-web-proposal_p1_thumb.png"
    	); 	
	   	$portfolios[5] = array(
    		"name" => "Chocolate-Covered Katie",
    		"img" => "images/thumbs/cck-web-proposal_p1_thumb.png"
    	);		
		$portfolios[6] = array(
    		"name" => "Harvard Graduate School of Design's 'View on Harvard GSD'",
    		"img" => "images/thumbs/gsd-v3-bookspread_thumb.png"
    	);
?>

<?php
	$pageTitle = "Portfolio";
	include("includes/header.php");
?>
<!-- Main Content -->
<section>
	<div class='container'>
		<h2>
			Portfolio
		</h2>
		<article class='gallery'>
			<ul>
				<?php foreach($portfolios as $portfolio) { ?>
					<li>
						<div>
							<img src="<?php echo $portfolio["img"]; ?>" alt="<?php echo $portfolio["name"] ?>">
						</div>
					</li>
				<?php } ?>			
			</ul>
		</article>
	</div>
</section>
<?php
	include("includes/footer.php");
?>