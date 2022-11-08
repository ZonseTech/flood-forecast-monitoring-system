<?php include("./includes/header.php") ?>

    <!-- Begin Page Content -->
    <div class="container-fluid">

        <!-- Content Row -->
        <div class="row">

            <!-- Area Chart -->
            <div class="col-xl-8 col-lg-7">
                <div class="card shadow mb-4">
                    <!-- Card Header - Dropdown -->
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">
                            Temperature
                        </h6>
                    </div>
                    <!-- Card Body -->
                    <figure class="card-body">
                        <div id="temperature-chart"></div>
                    </figure>
                </div>
            </div>

            <!-- Pie Chart -->
            <div class="col-xl-4 col-lg-5">
                <div class="card shadow my-0 mx-0">
                    <!-- Card Header - Dropdown -->
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">Calendar</h6>
                    </div>
                    <!-- Card Body -->
                    <div class="card-body">
                        <div class="chart-pie pt-4 pb-2">
                            <div id="bootstrap-datepicker"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <!-- /.container-fluid -->
  
<?php include("./includes/footer.php") ?>
